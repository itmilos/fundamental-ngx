import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Component({
    selector: 'fd-quick-view-subheader-subtitle',
    templateUrl: './quick-view-subheader-subtitle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: skeletonConsumerProviders({ text: true })
})
export class QuickViewSubheaderSubtitleComponent {
    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
