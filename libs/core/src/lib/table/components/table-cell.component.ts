import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableCell } from './table-cell';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[fdTableCell], [fd-table-cell]',
    templateUrl: './table-cell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCellComponent extends TableCell {}
