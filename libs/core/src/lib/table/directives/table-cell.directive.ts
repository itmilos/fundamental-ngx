import { Directive, forwardRef } from '@angular/core';
import { TableCellComponent } from '../components/table-cell.component';
import { TableCell } from '../components/table-cell';

/** @deprecated use TableCellComponent instead */
@Directive({
    selector: '[fdTableCell], [fd-table-cell]',
    providers: [{ provide: TableCellDirective, useExisting: forwardRef(() => TableCellComponent) }]
})
export class TableCellDirective extends TableCell {}
