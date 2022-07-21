import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

/**
 * Container for title and description.
 *
 * ```html
 * <fd-layout-panel>
 *     <fd-layout-panel-header>
 *         <fd-layout-panel-head>
 *             <fd-layout-panel-title>Title!</fd-layout-panel-title>
 *         </fd-layout-panel-head>
 *     </fd-layout-panel-header>
 * </fd-layout-panel>
 * ```
 */
@Component({
    selector: 'fd-layout-panel-head',
    templateUrl: './layout-panel-head.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: skeletonConsumerProviders({ text: true })
})
export class LayoutPanelHeadComponent {
    /** @hidden */
    @HostBinding('class.fd-layout-panel__head')
    fdLayoutPanelHeadClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
