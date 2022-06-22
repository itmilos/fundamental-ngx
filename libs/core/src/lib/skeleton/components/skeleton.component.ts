import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
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
export class SkeletonComponent {
    /** Width of the skeleton */
    @Input()
    set width(value: SkeletonWidth) {
        if (value === 'rand') {
            this._width = getRandomWidth();
            return;
        }

        this._width = value;
    }

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
    get _height(): string {
        return this.type === 'text' ? 'auto' : this.height;
    }

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
    private readonly _initialClass = 'fd-skeleton';
}

function getRandomWidth(): string {
    return `${random(30, 90)}%`;
}
