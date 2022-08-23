import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fd-list-title-text], [fdListTitleText]',
    providers: skeletonConsumerProviders()
})
export class ListTitleTextDirective {
    /** @hidden */
    @HostBinding('class.fd-list__title-text')
    fdListTitleText = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
