import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fdListFooter], [fd-list-footer]',
    providers: skeletonConsumerProviders({ text: true })
})
export class ListFooterDirective {
    /** @hidden */
    @HostBinding('class.fd-list__footer')
    fdListFooterClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
