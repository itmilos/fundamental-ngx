import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'fd-dynamic-page-dynamic-container-height-example',
    templateUrl: './dynamic-page-dynamic-container-height-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../dynamic-page-example.component.scss']
})
export class DynamicPageDynamicContainerHeightExampleComponent {
    visible = false;
    spacingItems: string[] = [];

    onCollapseChange(): void {
        console.log('collapse changed');
    }

    openPage(): void {
        this.visible = true;
    }

    closePage(): void {
        this.visible = false;
    }

    addSpace(): void {
        if (this.spacingItems.length > 1) {
            return;
        }
        this.spacingItems.push(`Spacing item ${this.spacingItems.length + 1}`);
    }
}
