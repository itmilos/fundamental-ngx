import { Component } from '@angular/core';
import { MessageToastService } from '@fundamental-ngx/core/message-toast';

@Component({
    selector: 'fd-dynamic-page-responsive-example',
    templateUrl: './dynamic-page-responsive-example.component.html',
    styleUrls: ['../dynamic-page-example.component.scss']
})
export class DynamicPageResponsiveExampleComponent {
    visible = false;

    pageTitle = 'Balenciaga Tripple S Trainers';

    compact = true;

    constructor(private _messageToastService: MessageToastService) {}

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
