import { Directive, HostBinding, Input } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fdListBylineLeft], [fd-list-byline-left]',
    providers: skeletonConsumerProviders({ text: true })
})
export class ListBylineLeftDirective {
    /** @hidden */
    @HostBinding('class.fd-list__byline-left')
    fdListBylineLeftClass = true;

    /** Whether or not this should be wrapped, when too much text. */
    @Input()
    @HostBinding('class.fd-list__byline-left--wrap')
    wrap = false;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
