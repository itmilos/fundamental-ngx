import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fd-list-title], [fdListTitle]',
    providers: skeletonConsumerProviders({ text: true })
})
export class ListTitleDirective implements OnInit {
    /** @hidden */
    @HostBinding('class.fd-list__title')
    fdListTitleClass = true;

    /** Whether or not this should be wrapped, when too much text. */
    @Input()
    @HostBinding('class.fd-list__title--wrap')
    wrap = false;

    /** @hidden */
    constructor(public elRef: ElementRef, private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }

    /** @hidden */
    ngOnInit(): void {
        const nativeEl = this.elRef.nativeElement;
        if (nativeEl.tagName === 'A') {
            nativeEl.setAttribute('tabIndex', '-1');
        }
    }
}
