import { Directive, Input } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

export type ListBylineStatus = 'neutral' | 'positive' | 'negative' | 'critical' | 'informative';

@Directive({
    selector: '[fdListBylineRight], [fd-list-byline-right]',
    host: {
        class: 'fd-list__byline-right',
        '[class.fd-list__byline-right--neutral]': 'status === "neutral"',
        '[class.fd-list__byline-right--positive]': 'status === "positive"',
        '[class.fd-list__byline-right--negative]': 'status === "negative"',
        '[class.fd-list__byline-right--critical]': 'status === "critical"',
        '[class.fd-list__byline-right--informative]': 'status === "informative"',
        '[class.fd-list__byline-right--wrap]': 'wrap'
    },
    providers: skeletonConsumerProviders({ text: true })
})
export class ListBylineRightDirective {
    /** Semantic status of byline
     *  Possible options are:
     * 'neutral' | 'positive' | 'negative' | 'critical' | 'informative'
     */
    @Input()
    status: ListBylineStatus;

    /** Whether or not this should be wrapped, when too much text. */
    @Input()
    wrap = false;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }
}
