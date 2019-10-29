import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, of, Observable } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';

export interface Column {
  [key: string]: {
    title: string;
    filter: boolean;
    sort: boolean;
    custom: string;
    filterFn: any;
    sortFn: any;
  };
}

@Component({
  selector: 'n-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() source;
  @Input() columns: Column[];
  @Input() templates: TemplateRef<any>[];
  @Input() menuTemplate: TemplateRef<any>[];
  @Input() menuContent;
  source$ = new BehaviorSubject<any[]>([]);
  dataSource$ = new BehaviorSubject<any[]>([]);
  sortKey$ = new BehaviorSubject<string>('');
  sortDirection$ = new BehaviorSubject<string>('asc');
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(5);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  columnNames: string[];
  controls = {};
  hasAccess: boolean;
  batch = 20;

  theEnd = false;
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;

  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;
  constructor() {}

  ngOnInit() {
    this.offset
      .pipe(
        throttleTime(500),
        mergeMap(n => this.getBatch(n))
      )
      .subscribe(d => console.log(d));

    this.columnNames = Object.keys(this.columns);
    this.columnNames = [...this.columnNames];

    for (let [k, v] of Object.entries(this.columns)) {
      if (v.filter) {
        this.controls[k] = new FormControl('');
      } else {
        this.controls[k] = null;
      }
      if (v.defaultSort) {
        this.sortKey$.next(k);
      }
    }

    this.source$.next(this.source);

    combineLatest(
      this.dataSource$,
      this.currentPage$,
      this.pageSize$
    ).subscribe(([allSources, currentPage, pageSize]) => {
      const startingIndex = (currentPage - 1) * pageSize;
      const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
      this.dataOnPage$.next(onPage);
    });

    // this.source$.pipe(take(1)).subscribe(elements => {
    //   this.dataSource$.next(elements);
    // });

    const filterTerms = Object.values(this.controls).map((c: FormControl) => {
      if (c) {
        return c.valueChanges;
      }
      return of(null);
    });

    combineLatest([
      this.source$,
      this.sortKey$,
      this.sortDirection$,
      ...filterTerms
    ]).subscribe(([result, sortKey, sortDirection, ...terms]) => {
      let filteredResults = result;
      const columnsWithTerm = this.mapColumnToFilter(this.columnNames, terms);

      for (const [columnName, term] of columnsWithTerm) {
        if (term) {
          filteredResults = this.filterFn(
            this.columns[columnName].filterFn,
            filteredResults,
            columnName,
            term
          );
        }
      }

      const sortedAndFilteredResults = this.sortFn(
        this.columns[sortKey].sortFn,
        filteredResults,
        sortKey,
        sortDirection
      );

      this.dataSource$.next(sortedAndFilteredResults);
    });

    // need these to fire initial values for non-BehaviorSubject
    for (const ctrlName of Object.keys(this.controls)) {
      if (this.controls[ctrlName]) {
        this.controls[ctrlName].setValue('');
      }
    }
  }

  mapColumnToFilter(columnNames, terms) {
    const arr = [];
    for (let i = 0; i < columnNames.length; i++) {
      arr.push([columnNames[i], terms[i]]);
    }
    return arr;
  }

  defaultFilterFn(result, columnName, term) {
    return result.filter(el =>
      el[columnName]
        .toString()
        .toLowerCase()
        .includes(term.toString().toLowerCase())
    );
  }

  sortFn(fn, result, sortKey, sortDirection) {
    if (fn) {
      return result.sort((a, b) => fn(a, b, sortKey, sortDirection));
    } else {
      return result.sort((a, b) =>
        this.defaultSortFn(a, b, sortKey, sortDirection)
      );
    }
  }

  defaultSortFn(a, b, sortKey, sortDirection) {
    if (a[sortKey] > b[sortKey]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    if (a[sortKey] < b[sortKey]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    return 0;
  }

  filterFn(fn, result, columnName, term) {
    if (fn) {
      return result.filter(el => fn(el[columnName], term));
    } else {
      return this.defaultFilterFn(result, columnName, term);
    }
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }
    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }

  getNextBatch(e) {
    if (this.theEnd) return;
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total) {
      console.log('done');
      this.offset.next(100);
    }
  }

  getBatch(offset) {
    console.log(offset);
    return of([]);
  }

  countUp(position) {
    const updatedElement = this.source$.value.find(
      e => e.position === position
    );
    updatedElement.count++;
    this.source$.next(this.source$.value);
  }
}
