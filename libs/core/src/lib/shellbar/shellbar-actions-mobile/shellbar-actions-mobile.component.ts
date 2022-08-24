import {
    AfterContentChecked,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    QueryList,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { ShellbarActionComponent } from '../shellbar-action/shellbar-action.component';
import { ActionSheetComponent } from '@fundamental-ngx/core/action-sheet';

@Component({
    selector: 'fd-shellbar-actions-mobile',
    templateUrl: './shellbar-actions-mobile.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellbarActionsMobileComponent implements AfterContentChecked {
    /** @hidden */
    @Input()
    shellbarActions: QueryList<ShellbarActionComponent>;

    /** @hidden */
    @Input()
    collapsedItemMenuLabel: string;

    @Input()
    isComboboxShowed: boolean;

    @Input()
    isComboboxExist = false;

    @Output() enableSearchInMobile = new EventEmitter();

    /** @hidden */
    totalNotifications: number;

    @ViewChild(ActionSheetComponent)
    actionSheetComponent: ActionSheetComponent;

    /** @hidden */
    actionClicked(item: ShellbarActionComponent, event: MouseEvent): void {
        if (item.callback) {
            item.callback(event);
        }
        this.actionSheetComponent.close();
    }

    showCombobox(): void {
        this.isComboboxShowed = true;
        this.enableSearchInMobile.emit(this.isComboboxShowed);
        this.actionSheetComponent.close();
    }

    /** @hidden */
    ngAfterContentChecked(): void {
        this.totalNotifications = 0;

        this.shellbarActions.forEach((action) => {
            if (action.notificationCount && typeof action.notificationCount === 'number') {
                this.totalNotifications = this.totalNotifications + action.notificationCount;
            }
        });
    }
}
