import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonDirective } from './directives/skeleton.directive';
import { SkeletonModuleConfig } from './skeleton.types';
import { SkeletonGlobalService } from './services/skeleton-global.service';
import { DEFAULT_SKELETON_STATE } from './tokens/default-skeleton-state.token';
import { SkeletonComponent } from './components/skeleton.component';
import { SkeletonTemplateDirective } from './directives/skeleton-template.directive';

@NgModule({
    imports: [CommonModule],
    exports: [SkeletonDirective, SkeletonTemplateDirective, SkeletonComponent],
    declarations: [SkeletonDirective, SkeletonTemplateDirective, SkeletonComponent]
})
export class SkeletonModule {
    static forRoot(config?: SkeletonModuleConfig): ModuleWithProviders<SkeletonModule> {
        const conf: SkeletonModuleConfig = config || { defaultSkeletonState: false };

        return {
            ngModule: SkeletonModule,
            providers: [
                {
                    provide: DEFAULT_SKELETON_STATE,
                    useValue: conf.defaultSkeletonState
                },
                SkeletonGlobalService
            ]
        };
    }
}
