import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    // TODO to be discussed
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-illustrated-message-title]',
    providers: skeletonConsumerProviders({ text: true })
})
export class IllustratedMessageTitleDirective {
    /** @hidden */
    @HostBinding('class.fd-illustrated-message__title')
    fdIllustratedMessageTitleClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
