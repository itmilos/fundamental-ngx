import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

let groupTitleUniqueId = 0;

@Component({
    selector: 'fd-quick-view-group-title',
    templateUrl: './quick-view-group-title.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: skeletonConsumerProviders({ text: true })
})
export class QuickViewGroupTitleComponent {
    /** Id of the quick view group title. */
    @Input()
    id: string = 'fd-quick-view-group-title-' + groupTitleUniqueId++;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
