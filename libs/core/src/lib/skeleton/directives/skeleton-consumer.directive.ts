import { Directive, ElementRef, Inject, InjectFlags, InjectionToken, Injector, Input, Optional } from '@angular/core';

import { DestroyedService } from '@fundamental-ngx/core/utils';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { SkeletonGlobalService } from '../services/skeleton-global.service';
import { SkeletonStateDirective } from '../directives/skeleton-state.directive';
import { SkeletonCallbackFn, SkeletonObserverConfig } from '../skeleton.types';
import { getChangesSource$ } from '../helpers/get-changes-source';
import { SkeletonTemplateDirective } from './skeleton-template.directive';

const DEFAULT_SKELETON_CLASS = 'fd-skeleton';
const SKELETON_ANIMATION_CLASS = 'fd-skeleton--animated';
const SKELETON_TEXT_CLASS = 'fd-skeleton--text';
const SKELETON_NATIVE_CLASS = 'fd-skeleton--native';

const defaultSkeletonConfig: SkeletonObserverConfig = {
    apply: true,
    modifiers: undefined,
    animation: true,
    text: true,
    native: false
};

const SKELETON_CONFIG_TOKEN = new InjectionToken<SkeletonObserverConfig>('SkeletonObserverConfig');

/**
 * Directive to consume skeleton state. Shows skeleton placeholder instead of an element to which is applied.
 * Could be used at the component level using `skeletonConsumerProviders` factory function.
 */
@Directive({
    selector: '[fdSkeletonConsumer]',
    providers: [DestroyedService]
})
export class SkeletonConsumerDirective {
    /**
     * Whether to apply modifier classes. True by default.
     */
    @Input()
    set fdSkeletonConsumerApply(value: BooleanInput) {
        this._config.apply = coerceBooleanProperty(value);

        if (this._callbacks.has(this._defaultCallbackFn)) {
            this._defaultCallbackFn(this._skeletonState);
        }
    }

    /**
     * Custom skeleton classes.
     * When provided all other fields has no power!
     */
    @Input()
    set fdSkeletonConsumerModifiers(value: string[]) {
        this._config.modifiers = value;

        if (this._callbacks.has(this._defaultCallbackFn)) {
            this._defaultCallbackFn(this._skeletonState);
        }
    }

    /**
     * Whether to set skeleton's height to the font-size property.
     * Handy, when needed to create skeleton for an empty text element.
     */
    @Input()
    set fdSkeletonConsumerText(value: BooleanInput) {
        this._config.text = coerceBooleanProperty(value);

        if (this._callbacks.has(this._defaultCallbackFn)) {
            this._defaultCallbackFn(this._skeletonState);
        }
    }

    /**
     * Whether to apply animation. True by default.
     */
    @Input()
    set fdSkeletonConsumerAnimation(value: BooleanInput) {
        this._config.animation = coerceBooleanProperty(value);

        if (this._callbacks.has(this._defaultCallbackFn)) {
            this._defaultCallbackFn(this._skeletonState);
        }
    }

    /**
     * Whether skeleton should be created without pseudo-elements.
     * Useful for inputs, images, etc. where we cannot use ::before & ::after pseudo elements.
     * Cannot be used together with text flag!
     */
    @Input()
    set fdSkeletonConsumerNative(value: BooleanInput) {
        this._config.native = coerceBooleanProperty(value);

        if (this._callbacks.has(this._defaultCallbackFn)) {
            this._defaultCallbackFn(this._skeletonState);
        }
    }

    /** @hidden */
    get _apply(): boolean {
        return this._config?.apply ?? true;
    }

    /** @hidden */
    protected _originalTabIndex: number;

    /** @hidden */
    protected _originalDisplay = false;

    /** @hidden */
    protected _originalHeight = false;

    /** @hidden */
    protected _originalWidth = false;

    /** @hidden */
    private _elementRef: ElementRef<HTMLElement>;

    /** @hidden */
    private _skeletonState: boolean;

    /** @hidden */
    private _callbacks = new Set<SkeletonCallbackFn>();

    /** @hidden */
    protected get _modifiers(): string[] {
        if (this._config.modifiers) {
            return [...this._config.modifiers];
        }

        const classesToManage = [DEFAULT_SKELETON_CLASS];

        if (this._config?.animation !== false) {
            classesToManage.push(SKELETON_ANIMATION_CLASS);
        }

        if (this._config?.native) {
            classesToManage.push(SKELETON_NATIVE_CLASS);
        }

        return classesToManage;
    }

    /** @hidden */
    constructor(
        protected readonly _injector: Injector,
        @Inject(SKELETON_CONFIG_TOKEN) @Optional() private readonly _config: SkeletonObserverConfig
    ) {
        this._elementRef = _injector.get(ElementRef);

        const parentConsumer = _injector.get(
            SkeletonConsumerDirective,
            null,
            // eslint-disable-next-line no-bitwise
            InjectFlags.Optional | InjectFlags.SkipSelf
        );
        const parentStateDirective = _injector.get(SkeletonStateDirective, null, InjectFlags.Optional);
        const parentTemplateDirective = _injector.get(SkeletonTemplateDirective, null, InjectFlags.Optional);
        const service = _injector.get(SkeletonGlobalService, null, InjectFlags.Optional);
        const onDestroy$ = this._injector.get(DestroyedService);

        getChangesSource$(parentStateDirective, service)
            .pipe(
                distinctUntilChanged(),
                filter(
                    () =>
                        !parentConsumer?._apply &&
                        !parentStateDirective?.fdSkeletonStateTemplate &&
                        !parentTemplateDirective?.fdSkeletonTemplate
                ),
                takeUntil(onDestroy$)
            )
            .subscribe((skeletonState) => {
                this._skeletonState = skeletonState;

                this._callCallbacks(skeletonState);
            });

        // SKELETON_CONFIG_TOKEN will always be resolved to null if used as the directive
        const usedAsDirective = this._config === null;

        this._config = { ...defaultSkeletonConfig, ...this._config };

        // Consume automatically only if used as the directive
        // Otherwise user has to manually consume
        if (usedAsDirective) {
            this.consume();
        }
    }

    /**
     * Set callbacks that will be called when skeleton state changes.
     * If no callbacks are passed and directive created using factory function then the default consume logic will be set.
     * @param callbacks
     */
    consume(...callbacks: Array<SkeletonCallbackFn>): void {
        if (!callbacks.length) {
            if (!this._callbacks.has(this._defaultCallbackFn)) {
                this.consume(this._defaultCallbackFn);
            }

            return;
        }

        callbacks.forEach((callback) => {
            this._callbacks.add(callback);

            callback(this._skeletonState);
        });
    }

    /**
     * Remove callbacks that were previously set.
     * If no callbacks are passed and directive created using factory function then the default consume logic will be removed.
     * @param callbacks
     */
    removeConsumer(...callbacks: Array<SkeletonCallbackFn>): void {
        if (!callbacks.length) {
            if (this._callbacks.has(this._defaultCallbackFn)) {
                this.removeConsumer(this._defaultCallbackFn);
            }

            return;
        }

        callbacks.forEach((callback) => {
            this._callbacks.delete(callback);
        });
    }

    /** @hidden */
    private _callCallbacks(skeletonState: boolean): void {
        this._callbacks.forEach((callback) => callback(skeletonState));
    }

    /** @hidden */
    protected _defaultCallbackFn = (skeletonState): void => {
        this._manageCssClasses(skeletonState);
        this._manageTabIndex(skeletonState);
        this._manageVisibility(skeletonState);
    };

    /** @hidden */
    private _manageCssClasses(skeletonState: boolean): void {
        if (skeletonState && this._apply) {
            Object.values(this._modifiers).forEach((className) => {
                this._elementRef.nativeElement.classList.add(className);
            });
        } else {
            Object.values(this._modifiers).forEach((className) => {
                this._elementRef.nativeElement.classList.remove(className);
            });
        }
    }

    /** @hidden */
    private _manageTabIndex(skeletonState: boolean): void {
        if (skeletonState && this._apply) {
            this._originalTabIndex = this._elementRef.nativeElement.tabIndex;
            this._elementRef.nativeElement.tabIndex = -1;
        } else {
            this._elementRef.nativeElement.tabIndex = this._originalTabIndex;
        }
    }

    /**
     * Manage element's style properties to be able to show skeleton placeholder.
     * @hidden
     */
    private _manageVisibility(skeletonState: boolean): void {
        if (skeletonState && this._apply) {
            const computeStyle = window.getComputedStyle(this._elementRef.nativeElement);

            if (computeStyle.display === 'inline') {
                this._originalDisplay = true;
                this._elementRef.nativeElement.style.display = 'inline-block';
            }

            if (computeStyle.width === '0px') {
                this._originalWidth = true;
                this._elementRef.nativeElement.style.width = '100%';
            }

            if (computeStyle.height === '0px') {
                this._originalHeight = true;
                this._elementRef.nativeElement.style.height = 'auto';

                if (!this._config?.modifiers && this._config?.text) {
                    this._elementRef.nativeElement.classList.add(SKELETON_TEXT_CLASS);
                }
            }
        } else {
            if (this._originalDisplay) {
                this._originalDisplay = false;
                this._elementRef.nativeElement.style.removeProperty('display');
            }

            if (this._originalWidth) {
                this._originalWidth = false;
                this._elementRef.nativeElement.style.removeProperty('width');
            }

            if (this._originalHeight) {
                this._originalHeight = false;
                this._elementRef.nativeElement.style.removeProperty('height');

                if (!this._config?.modifiers && this._config?.text) {
                    this._elementRef.nativeElement.classList.remove(SKELETON_TEXT_CLASS);
                }
            }
        }
    }
}
