import { Directive } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-quick-view-group-item-content-element]',
    host: {
        class: `${QuickViewGroupItemContentElementDirective.class} fd-input`
    },
    providers: skeletonConsumerProviders()
})
export class QuickViewGroupItemContentElementDirective {
    /** @hidden */
    static class = 'fd-quick-view__group-item__content-element';

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
