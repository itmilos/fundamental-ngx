import { Directive, forwardRef } from '@angular/core';
import { CONTENT_DENSITY_DIRECTIVE, DeprecatedCompactDirective } from '@fundamental-ngx/core/content-density';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'fd-datetime-picker[compact]',
    providers: [
        {
            provide: CONTENT_DENSITY_DIRECTIVE,
            useExisting: forwardRef(() => DeprecatedDateTimePickerContentDensityDirective)
        }
    ]
})
export class DeprecatedDateTimePickerContentDensityDirective extends DeprecatedCompactDirective {
    constructor() {
        super('fd-datetime-picker');
    }
}
