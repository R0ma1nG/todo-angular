import {GridsterItem} from 'angular-gridster2/lib/gridsterItem.interface';
import {GridsterItemComponentInterface} from 'angular-gridster2';
import {UUID} from 'angular2-uuid';

export class Todo implements GridsterItem {
  id: string;
  title: string;
  description: string;
  itemList: Array<string>;

  constructor(title, description, x = 0, y = 0, rows = 1, cols = 1, items = []) {
    this.id = UUID.UUID();
    this.title = title;
    this.description = description;
    this.itemList = items;
    this.x = x;
    this.y = y;
    this.cols = cols;
    this.rows = rows;
  }

  cols: number;
  compactEnabled: boolean;
  dragEnabled: boolean;
  initCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => void;
  maxItemArea: number;
  maxItemCols: number;
  maxItemRows: number;
  minItemArea: number;
  minItemCols: number;
  minItemRows: number;
  resizeEnabled: boolean;
  rows: number;
  x: number;
  y: number;
}
