import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    // TODO to be discussed
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-illustrated-message-text]',
    providers: skeletonConsumerProviders({ text: true })
})
export class IllustratedMessageTextDirective {
    /** @hidden */
    @HostBinding('class.fd-illustrated-message__text')
    fdIllustratedMessageTextClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
