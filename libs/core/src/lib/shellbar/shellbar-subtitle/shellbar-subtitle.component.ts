import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

/**
 * The component that represents a shellbar subtitle.
 * The subtitle is optional and should be used rarely.
 * ```html
 *   <fd-shellbar-subtitle>
 *      Corporate Portal
 *   </fd-shellbar-subtitle>
 * ```
 */
@Component({
    selector: 'fd-shellbar-subtitle',
    templateUrl: './shellbar-subtitle.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            fd-shellbar-subtitle {
                display: flex;
            }
        `
    ],
    providers: skeletonConsumerProviders({ text: true })
})
export class ShellbarSubtitleComponent {
    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
