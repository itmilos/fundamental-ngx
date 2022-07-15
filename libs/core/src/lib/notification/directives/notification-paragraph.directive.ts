import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fdNotificationParagraph], [fd-notification-paragraph]',
    providers: skeletonConsumerProviders({ text: true })
})
export class NotificationParagraphDirective {
    /** @hidden */
    @HostBinding('class.fd-notification__paragraph')
    fdNotificationParagraphClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
