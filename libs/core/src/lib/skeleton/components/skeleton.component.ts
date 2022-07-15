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
import { random } from 'lodash-es';

export type SkeletonType = 'circle' | 'rectangle' | 'text';
export type SkeletonWidth = 'rand' | string;
export type SkeletonHeight = 'auto' | string;

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
    width: SkeletonWidth;

    /** Height of the skeleton. Relevant if type 'circle' or 'rectangle'. */
    @Input()
    height: SkeletonHeight;

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
    @HostBinding('class.fd-skeleton--rand')
    _randomWidthClass: boolean;

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
            this._width = this.width === 'rand' ? '100%' : this.width;
            this._randomWidthClass = this.width === 'rand';
            this._processRandomWidthVariable(this.width === 'rand');
        }

        if (this.type === 'circle') {
            if (this._width && !this._height) {
                this._height = this._width;
            } else if (this._height && !this._width) {
                this._width = this._height;
            }
        }
    }

    /** @hidden */
    private _processRandomWidthVariable(skeletonState: boolean): void {
        if (skeletonState) {
            this._elRef.nativeElement?.style.setProperty('--fdSkeletonWidth', getRandomWidth());
        } else {
            this._elRef.nativeElement?.style.removeProperty('--fdSkeletonWidth');
        }
    }
}

function getRandomWidth(): string {
    return `${random(30, 90)}%`;
}
