import {
    ChangeDetectionStrategy,
    Component,
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

    @Input()
    @HostBinding('class.fd-skeleton--inherit')
    inheritSize = false;

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
    private readonly _class = 'fd-skeleton';

    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void {
        const type = changes['type']?.currentValue || this.type;

        if (changes['type'] && type === 'text') {
            this._height = 'auto';
        } else if (changes['height'] && type !== 'text') {
            this._height = changes['height'].currentValue;
        }

        if (changes['width']) {
            this._width = changes['width'].currentValue === 'rand' ? getRandomWidth() : changes['width'].currentValue;
        }

        if (type === 'circle') {
            if (this._width && !this._height) {
                this._height = this._width;
            } else if (this._height && !this._width) {
                this._width = this._height;
            }
        }
    }
}

function getRandomWidth(): string {
    return `${random(30, 90)}%`;
}
