import { Directive, ElementRef, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fd-list-navigation-item-text], [fdListNavigaitonItemText]',
    providers: skeletonConsumerProviders({ text: true })
})
export class ListNavigationItemTextDirective {
    /** @hidden */
    @HostBinding('class.fd-list__navigation-item-text')
    navigationItemTextClass = true;

    /** @hidden */
    constructor(private _elementRef: ElementRef, private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }

    /** @hidden */
    get elementRef(): ElementRef<HTMLElement> {
        return this._elementRef;
    }
}
