import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { skeletonConsumerProviders, SkeletonConsumerDirective } from '@fundamental-ngx/core/skeleton';

/**
 * Layout Panel footer can be utilized for pagination, secondary actions, add more data, etc.
 *
 * ```html
 * <fd-layout-panel>
 *     <fd-layout-panel-footer>
 *         Some text can go here!
 *     </fd-layout-panel-footer>
 * </fd-layout-panel>
 * ```
 */
@Component({
    selector: 'fd-layout-panel-footer',
    templateUrl: './layout-panel-footer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: skeletonConsumerProviders({ text: true })
})
export class LayoutPanelFooterComponent {
    /** @hidden */
    @HostBinding('class.fd-layout-panel__footer')
    fdLayoutPanelFooterClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
