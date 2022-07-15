import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fdNotificationLimitDescription], [fd-notification-limit-description]',
    providers: skeletonConsumerProviders({ text: true })
})
export class NotificationLimitDescriptionDirective {
    /** @hidden */
    @HostBinding('class.fd-notification__limit--description')
    fdNotificationDescriptionClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
