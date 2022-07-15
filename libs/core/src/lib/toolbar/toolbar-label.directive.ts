import { Directive, ElementRef } from '@angular/core';

import { ToolbarItemDirective } from './toolbar-item.directive';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-toolbar-label]',
    host: {
        class: 'fd-label fd-toolbar__overflow-label'
    },
    providers: skeletonConsumerProviders({ text: true })
})
export class ToolbarLabelDirective extends ToolbarItemDirective {
    /** @hidden */
    constructor(
        private readonly _elementRef: ElementRef,
        private readonly _skeletonConsumer: SkeletonConsumerDirective
    ) {
        super(_elementRef);

        _skeletonConsumer.consume();
    }
}
