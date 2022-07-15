import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

/**
 * The action bar title component.
 *
 * ```html
 * <fd-action-bar>
 *     <div fd-action-bar-header>
 *         <div fd-action-bar-title>Page Title</div>
 *     </div>
 * <fd-action-bar>
 * ```
 */
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[fd-action-bar-title]',
    template: `
        <h2 class="fd-title fd-title--h3">
            <ng-content></ng-content>
        </h2>
    `,
    host: {
        class: 'fd-action-bar__title'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: skeletonConsumerProviders({ text: true })
})
export class ActionBarTitleComponent {
    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
