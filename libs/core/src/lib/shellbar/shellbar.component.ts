import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    forwardRef,
    Input,
    OnChanges,
    OnInit,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { ComboboxComponent } from '@fundamental-ngx/core/combobox';
import { SelectComponent } from '@fundamental-ngx/core/select';
import { debounceTime, fromEvent, Subject, takeUntil } from 'rxjs';

export type ShellbarSizes = 's' | 'm' | 'l' | 'xl';

/**
 * The shellbar offers consistent, responsive navigation across all products and applications.
 * Includes support for branding, product navigation, search, notifications, and user settings.
 * Shellbar is a composite component comprised of mandatory and optional elements.
 */
@Component({
    selector: 'fd-shellbar',
    templateUrl: './shellbar.component.html',
    styleUrls: ['./shellbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellbarComponent implements OnChanges, AfterContentInit, AfterViewInit, OnInit {
    /** Size of Shellbar component 's' | 'm' | 'l' | 'xl' */
    @Input()
    size: ShellbarSizes = 'xl';

    /**
     * Whether the Shellbar is used with Side Navigation
     * When set to true, the responsive paddings are not applied
     */
    @Input()
    sideNav = false;

    @Input()
    showComboboxInput = false;

    @Input()
    disableInputHide = false;

    @Input()
    responsive = false;

    /**
     * @hidden
     * An RxJS Subject that will kill the data stream upon component’s destruction (for unsubscribing)
     */
    private readonly _onDestroy$: Subject<void> = new Subject<void>();

    /** @hidden */
    @ContentChildren(forwardRef(() => ButtonComponent))
    buttons: QueryList<ButtonComponent>;

    /** @hidden */
    @ContentChild(ComboboxComponent, { static: false })
    comboboxComponent: ComboboxComponent;

    /** @hidden */
    @ContentChild(SelectComponent, { static: false })
    selectComponent: SelectComponent;

    /** @hidden */
    constructor(private readonly _elementRef: ElementRef, private readonly _cdr: ChangeDetectorRef) {}

    /** @hidden */
    ngOnInit(): void {
        this._attachResizeListener();
    }

    /** @hidden */
    ngOnChanges(): void {
        if (this.comboboxComponent && this.comboboxComponent.inShellbar) {
            this._handleComboboxOnSizeChange();
            this.comboboxComponent.hideShowInputField();
        }
    }

    /** @hidden */
    ngAfterContentInit(): void {
        this._applyShellbarModeToCombobox();
        this._applyShellbarModeToSelect();
        this._applyShellbarModeToButtons();
    }

    /** @hidden */
    ngAfterViewInit(): void {
        this._onResize();
    }

    /** @hidden */
    _applyShellbarModeToButtons(): void {
        if (this.buttons && this.buttons.length) {
            this.buttons.forEach((button) => {
                button.elementRef().nativeElement.classList.add('fd-shellbar__button');
            });
        }
    }

    /** @hidden */
    _applyShellbarModeToCombobox(): void {
        if (this.comboboxComponent) {
            this.comboboxComponent.inShellbar = true;
            this.comboboxComponent.fullWidth = true;
            this.comboboxComponent.showInput = this.showComboboxInput;
            this._handleComboboxOnSizeChange();
        }
    }

    /** @hidden */
    _applyShellbarModeToSelect(): void {
        if (this.selectComponent) {
            this.selectComponent.inShellbar = true;
        }
    }

    /** @hidden */
    _handleComboboxOnSizeChange(): void {
        if (this.size === 's') {
            this.comboboxComponent.showInput = true;
            this.comboboxComponent.disableHideShowOfInput = true;
        } else {
            this.comboboxComponent.disableHideShowOfInput = this.disableInputHide;
        }
    }

    /** @hidden */
    private _attachResizeListener(): void {
        fromEvent(window, 'resize')
            .pipe(debounceTime(10), takeUntil(this._onDestroy$))
            .subscribe(() => this._onResize());
    }

    /** @hidden */
    private _onResize(): void {
        if (this.responsive) {
            if (this._elementRef.nativeElement.offsetWidth > 1024) {
                this.size = 'xl';
            } else if (this._elementRef.nativeElement.offsetWidth > 601) {
                this.size = 'l';
            } else if (this._elementRef.nativeElement.offsetWidth > 414) {
                this.size = 'm';
            } else {
                this.size = 's';
            }
            this._cdr.markForCheck();
        }
    }
}
