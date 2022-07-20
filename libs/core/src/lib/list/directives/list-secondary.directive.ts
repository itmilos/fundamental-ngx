import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fd-list-secondary] ,[fdListSecondary]',
    providers: skeletonConsumerProviders({ text: true })
})
export class ListSecondaryDirective {
    /** @hidden */
    @HostBinding('class.fd-list__secondary')
    fdListSecondaryClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
