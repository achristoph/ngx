import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div style="display:flex;align-items: center;justify-content: center">
      <n-table
        [source]="sourceData"
        [columns]="columnDefs"
        [templates]="{ symbol: symbol, count: count }"
      >
      </n-table>
    </div>
    <ng-template #symbol let-row>
      <i>{{ row }}</i>
    </ng-template>
    <ng-template #count let-row>
      <b>{{ row }}</b>
    </ng-template>
  `
})
export class HomeComponent implements OnInit {
  sourceData: any = [];
  columnDefs: any = {};
  menuContent: any = {};

  constructor() {}

  ngOnInit() {
    this.sourceData = [
      { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 }
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Hydrogen1', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium1', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium1', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium1', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron1', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon1', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen1', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen1', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine1', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Neon1', weight: 20.1797, symbol: 'Ne', count: 0 },
      // { name: 'Hydrogen2', weight: 1.0079, symbol: 'H', count: 0 },
      // { name: 'Helium2', weight: 4.0026, symbol: 'He', count: 0 },
      // { name: 'Lithium2', weight: 6.941, symbol: 'Li', count: 0 },
      // { name: 'Beryllium2', weight: 9.0122, symbol: 'Be', count: 0 },
      // { name: 'Boron2', weight: 10.811, symbol: 'B', count: 0 },
      // { name: 'Carbon2', weight: 12.0107, symbol: 'C', count: 0 },
      // { name: 'Nitrogen2', weight: 14.0067, symbol: 'N', count: 0 },
      // { name: 'Oxygen2', weight: 15.9994, symbol: 'O', count: 0 },
      // { name: 'Fluorine2', weight: 18.9984, symbol: 'F', count: 0 },
      // { name: 'Neon2', weight: 20.1797, symbol: 'Ne', count: 0 }
    ];
    this.columnDefs = {
      name: {
        title: 'Name',
        filter: true,
        sort: true,
        defaultSort: true,
        filterFn: (value, term) => {
          return value
            .toString()
            .toLowerCase()
            .includes(term.toString().toLowerCase());
        },
        sortFn: (a, b, sortKey, sortDirection) => {
          if (a[sortKey] > b[sortKey]) {
            return sortDirection === 'asc' ? 1 : -1;
          }
          if (a[sortKey] < b[sortKey]) {
            return sortDirection === 'asc' ? -1 : 1;
          }
          return 0;
        }
      },
      weight: {
        title: 'Weight',
        filter: true,
        sort: true
      },
      count: {
        title: 'Count'
      },
      symbol: {
        title: 'Symbol',
        filter: true,
        customTemplate: true
      }
    };
  }
}
