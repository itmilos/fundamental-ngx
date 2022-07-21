import { Component } from '@angular/core';

@Component({
    selector: 'fd-dynamic-page-facets-example',
    templateUrl: './dynamic-page-facets-example.component.html',
    styleUrls: ['../dynamic-page-example.component.scss']
})
export class DynamicPageFacetsExampleComponent {
    visible = false;

    onCollapseChange(): void {
        console.log('collapse changed');
    }

    openPage(): void {
        this.visible = true;
    }

    closePage(): void {
        this.visible = false;
    }
}
