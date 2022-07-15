import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fdNotificationLimitTitle], [fd-notification-limit-title]',
    providers: skeletonConsumerProviders({ text: true })
})
export class NotificationLimitTitleDirective {
    /** @hidden */
    @HostBinding('class.fd-notification__limit--title')
    fdNotificationTitleClass = true;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
