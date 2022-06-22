import {
    Directive,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { Nullable } from '@fundamental-ngx/core/shared';

import { getChangesSource$ } from '../helpers/get-changes-source';
import { SkeletonGlobalService } from '../services/skeleton-global.service';
import { LocalSkeletonState, SkeletonStateGlobalKeyword } from '../skeleton.types';
import { SKELETON_DIRECTIVE } from '../tokens/skeleton-directive.token';

/** Directive to set the skeleton state for the component subtree. Optionally renders the skeleton template, if passed. */
@Directive({
    selector: '[fdSkeleton]',
    providers: [
        {
            provide: SKELETON_DIRECTIVE,
            useExisting: forwardRef(() => SkeletonDirective)
        }
    ]
})
export class SkeletonDirective extends BehaviorSubject<LocalSkeletonState> implements OnInit, OnDestroy {
    /** Set the skeleton state for the component subtree. If set to 'global', then the global skeleton state will be used. */
    @Input()
    set fdSkeleton(value: LocalSkeletonState) {
        this.next(value);
    }

    /** Skeleton Template to render instead. */
    @Input()
    fdSkeletonTemplate: TemplateRef<any>;

    /** @hidden */
    private readonly _onDestroy$ = new Subject<void>();

    /** @hidden */
    constructor(
        @Inject(SkeletonGlobalService)
        @Optional()
        private readonly _skeletonGlobalService: Nullable<SkeletonGlobalService>,
        private readonly _vcr: ViewContainerRef,
        private readonly _templateRef: TemplateRef<any>
    ) {
        super(SkeletonStateGlobalKeyword);
    }

    /** @hidden */
    ngOnInit(): void {
        getChangesSource$(this, this._skeletonGlobalService)
            .pipe(distinctUntilChanged(), takeUntil(this._onDestroy$))
            .subscribe((loadingState) => this._updateView(loadingState));
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._onDestroy$.next();

        this.complete();
    }

    /** @hidden */
    private _updateView(loadingState: boolean): void {
        this._vcr.clear();

        if (loadingState && this.fdSkeletonTemplate) {
            this._vcr.createEmbeddedView(this.fdSkeletonTemplate);
        } else if (this._templateRef) {
            this._vcr.createEmbeddedView(this._templateRef);
        }
    }
}
