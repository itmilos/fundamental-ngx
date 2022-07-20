import { Component } from '@angular/core';
import { BarElementDirective } from '@fundamental-ngx/core/bar';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

/**
 * @deprecated
 * Consider using `fd-button-bar`
 */
@Component({
    selector: 'fd-dialog-footer-button',
    template: '<ng-content></ng-content>',
    providers: skeletonConsumerProviders()
})
export class DialogFooterButtonComponent extends BarElementDirective {
    /** @hidden */
    constructor(protected override readonly _skeletonConsumer: SkeletonConsumerDirective) {
        super(_skeletonConsumer);
    }
}
