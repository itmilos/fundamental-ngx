import { Directive, HostBinding } from '@angular/core';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    selector: '[fd-list-navigation-item-arrow], [fdListNavigaitonItemArrow]',
    providers: skeletonConsumerProviders({ native: true })
})
export class ListNavigationItemArrowDirective {
    /** @hidden */
    @HostBinding('class.fd-list__navigation-item-arrow')
    navigationItemArrowClass = true;

    /** @hidden */
    @HostBinding('class.sap-icon--navigation-right-arrow')
    rightArrowClass = true;

    /** @hidden */
    @HostBinding('class.sap-icon--navigation-down-arrow')
    downArrowClass = false;

    /** @hidden */
    @HostBinding('class.is-expanded')
    expanded = false;

    /** @hidden */
    constructor(private readonly _skeletonConsumer: SkeletonConsumerDirective) {
        _skeletonConsumer.consume();
    }

    /** @hidden */
    _setExpanded(expanded: boolean): void {
        if (this.expanded !== expanded) {
            this.rightArrowClass = !this.rightArrowClass;
            this.downArrowClass = !this.downArrowClass;
        }
        this.expanded = expanded;
    }
}
