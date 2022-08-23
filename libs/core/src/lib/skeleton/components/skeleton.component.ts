import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnChanges,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';

export type SkeletonType = 'circle' | 'rectangle' | 'text';

@Component({
    selector: 'fd-skeleton',
    template: `<ng-content></ng-content>`,
    styleUrls: ['skeleton.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent implements OnChanges {
    /** Width of the skeleton */
    @Input()
    width: string;

    /** Height of the skeleton. Relevant if type 'circle' or 'rectangle'. */
    @Input()
    height = 'auto';

    /** Type of the skeleton. When set to 'text' height is automatically calculated. */
    @Input()
    type: SkeletonType = 'rectangle';

    /** Whether the skeleton has animation. */
    @Input()
    @HostBinding('class.fd-skeleton--animated')
    animation = true;

    /** @hidden */
    @HostBinding('style.width')
    _width: string;

    /** @hidden */
    @HostBinding('style.height')
    _height: string;

    /** @hidden */
    @HostBinding('class.fd-skeleton--text')
    get _textClass(): boolean {
        return this.type === 'text';
    }

    /** @hidden */
    @HostBinding('class.fd-skeleton--circle')
    get _circleClass(): boolean {
        return this.type === 'circle';
    }

    /** @hidden */
    @HostBinding('class')
    private readonly _class = 'fd-skeleton fd-skeleton--component';

    /** @hidden */
    constructor(private readonly _elRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['type'] && this.type === 'text') {
            this._height = 'auto';
        } else if (changes['height'] && this.type !== 'text') {
            this._height = changes['height'].currentValue;
        }

        if (changes['width']) {
            this._width = this.width;
        }

        if (this.type === 'circle') {
            if (this._width && !this._height) {
                this._height = this._width;
            } else if (this._height && !this._width) {
                this._width = this._height;
            }
        }
    }
}
