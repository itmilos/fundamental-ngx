import { ElementRef, Optional, Provider } from '@angular/core';
import { distinctUntilChanged, filter, Observable, takeUntil, tap } from 'rxjs';
import { Nullable } from '@fundamental-ngx/core/shared';
import { DestroyedService } from '@fundamental-ngx/core/utils';

import { SkeletonConsumer } from '../classes/skeleton-consumer.class';
import { SkeletonDirective } from '../directives/skeleton.directive';
import { SkeletonGlobalService } from '../services/skeleton-global.service';
import { SkeletonConsumerConfig } from '../skeleton.types';
import { SKELETON_DIRECTIVE } from '../tokens/skeleton-directive.token';
import { defaultSkeletonConsumerConfig } from '../variables/default-skeleton-consumer-config';
import { getChangesSource$ } from '../helpers/get-changes-source';

/**
 *  Skeleton consumer provider that adds skeleton classes to the component where it provided.
 *  To be used on the basic components where only one (!) skeleton should be rendered instead the component itself.
 *  Otherwise, use the SkeletonTemplateDirective.
 */
export function skeletonConsumer(providedConfiguration?: SkeletonConsumerConfig): Provider {
    const configuration = { ...defaultSkeletonConsumerConfig, ...providedConfiguration };

    return {
        provide: SkeletonConsumer,
        useFactory: (
            elementRef: ElementRef<Element>,
            destroy$: Observable<void>,
            skeletonDirective?: Nullable<SkeletonDirective>,
            skeletonGlobalService?: Nullable<SkeletonGlobalService>
        ) => {
            const changesSource$ = getChangesSource$(skeletonDirective, skeletonGlobalService).pipe(
                distinctUntilChanged(),
                filter(() => !skeletonDirective?.fdSkeletonTemplate),
                tap((skeletonState) => {
                    if (skeletonState) {
                        Object.values(configuration.modifiers).forEach((className) => {
                            elementRef.nativeElement.classList.add(className);
                        });
                    } else {
                        Object.values(configuration.modifiers).forEach((className) => {
                            elementRef.nativeElement.classList.remove(className);
                        });
                    }
                })
            );

            changesSource$.pipe(takeUntil(destroy$)).subscribe();

            return new SkeletonConsumer(changesSource$);
        },
        deps: [
            ElementRef,
            DestroyedService,
            [new Optional(), SKELETON_DIRECTIVE],
            [new Optional(), SkeletonGlobalService]
        ]
    };
}
