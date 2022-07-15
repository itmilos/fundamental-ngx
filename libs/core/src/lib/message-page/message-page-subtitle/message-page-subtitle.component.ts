import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { skeletonConsumerProviders, SkeletonConsumerDirective } from '@fundamental-ngx/core/skeleton';

@Component({
    selector: 'fd-message-page-subtitle',
    template: `<ng-content></ng-content>`,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: skeletonConsumerProviders({ text: true })
})
export class MessagePageSubtitleComponent {
    /** @hidden */
    @HostBinding('class.fd-message-page__subtitle')
    fdMessagePageTitleClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
