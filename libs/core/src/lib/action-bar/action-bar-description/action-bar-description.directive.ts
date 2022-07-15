import { Directive, HostBinding, Input } from '@angular/core';
import { skeletonConsumerProviders, SkeletonConsumerDirective } from '@fundamental-ngx/core/skeleton';

/**
 * The action bar description.
 *
 * ```html
 * <div fd-action-bar>
 *     <div fd-action-bar-header>
 *         <div fd-action-bar-description>Page Description</div>
 *     </div>
 * <div>
 * ```
 */
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-action-bar-description]',
    host: {
        class: 'fd-action-bar__description'
    },
    providers: skeletonConsumerProviders({ text: true })
})
export class ActionBarDescriptionDirective {
    /*
     Whether the action bar also has a back button.
     */
    @Input()
    @HostBinding('class.fd-action-bar__description--back')
    withBackBtn = false;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
