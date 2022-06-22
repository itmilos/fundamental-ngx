import { Observable, of, switchMap } from 'rxjs';
import { Nullable } from '@fundamental-ngx/core/shared';

import { SkeletonService } from '../services/skeleton.service';
import { SkeletonStateGlobalKeyword, LocalSkeletonState } from '../skeleton.types';

export const getChangesSource$ = (
    skeletonDirective?: Nullable<Observable<LocalSkeletonState>>,
    skeletonService?: Nullable<SkeletonService>
): Observable<boolean> => {
    const serviceValue$ = skeletonService ? skeletonService.skeletonStateObservable : of(false);
    const changesSource$ = skeletonDirective ? skeletonDirective : serviceValue$;

    return changesSource$.pipe(
        switchMap((mode: LocalSkeletonState) => {
            if (mode !== SkeletonStateGlobalKeyword) {
                return of(mode);
            }

            return serviceValue$;
        })
    );
};
