import { TableCellDirective } from './directives/table-cell.directive';
import { TableCellComponent } from './components/table-cell.component';

/** @hidden */
export abstract class FdTable {
    abstract _onCellKeydown(event: KeyboardEvent, cell: TableCellDirective | TableCellComponent): void;
    abstract allCellsFocusable: boolean;
}
