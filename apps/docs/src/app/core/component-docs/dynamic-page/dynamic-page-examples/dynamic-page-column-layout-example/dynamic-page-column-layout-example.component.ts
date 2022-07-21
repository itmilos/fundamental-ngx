import { Component } from '@angular/core';
import { MessageToastService } from '@fundamental-ngx/core/message-toast';

import { FlexibleColumnLayout } from '@fundamental-ngx/core/flexible-column-layout';

@Component({
    selector: 'fd-dynamic-page-column-layout-example',
    templateUrl: './dynamic-page-column-layout-example.component.html',
    styleUrls: ['../dynamic-page-example.component.scss']
})
export class DynamicPageColumnLayoutExampleComponent {
    visible = false;

    pageTitle = 'Balenciaga Tripple S Trainers';

    /**
     * documentation related property
     * sets the initial layout of the component to 'OneColumnStartFullScreen'
     * sets a new layout for the component
     */
    localLayout: FlexibleColumnLayout = 'OneColumnStartFullScreen';

    separatorAriaLabel = 'separator';

    expandTitle = 'Expand';

    collapseTitle = 'Collapse';

    constructor(private _messageToastService: MessageToastService) {}

    /**
     * this function is reacting to events (button clicks) and
     * updates the local property which sets a new layout for the component.
     * Available values for the layouts include:
     * 'OneColumnStartFullScreen' | 'OneColumnMidFullScreen' | 'OneColumnEndFullScreen' |
     * 'TwoColumnsStartExpanded' | 'TwoColumnsMidExpanded' | 'TwoColumnsEndExpanded' |
     * 'ThreeColumnsMidExpanded' | 'ThreeColumnsEndExpanded' | 'ThreeColumnsStartMinimized' |
     * 'ThreeColumnsEndMinimized';
     */
    changeLayout(newValue: FlexibleColumnLayout): void {
        this.localLayout = newValue;
    }

    onCollapseChange(): void {
        console.log('collapse changed');
    }

    openPage(): void {
        this.visible = true;
        this._openToast('Dynamic Page has been opened');
    }

    closePage(): void {
        this.visible = false;
    }

    handleAction(action: string): void {
        this.closePage();
        this._openToast(action);
    }

    private _openToast(content: string): void {
        this._messageToastService.open(content, { duration: 3000 });
    }
}
