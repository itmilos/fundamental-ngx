import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { applyCssClass } from '@fundamental-ngx/core/utils';
import { CssClassBuilder } from '@fundamental-ngx/core/utils';
import { SkeletonConsumerDirective, skeletonConsumerProviders } from '@fundamental-ngx/core/skeleton';

import { CLASS_NAME } from '../constants';

@Component({
    selector: 'fd-card-kpi-header',
    templateUrl: './card-kpi-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: skeletonConsumerProviders()
})
export class CardKpiHeaderComponent implements OnInit, CssClassBuilder {
    /** @hidden */
    class: string;

    /** @hidden */
    constructor(
        private _elementRef: ElementRef<HTMLElement>,
        private readonly _skeletonConsumer: SkeletonConsumerDirective
    ) {
        _skeletonConsumer.consume();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** @hidden */
    buildComponentCssClass(): string[] {
        return [CLASS_NAME.cardAnalyticalArea];
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}
