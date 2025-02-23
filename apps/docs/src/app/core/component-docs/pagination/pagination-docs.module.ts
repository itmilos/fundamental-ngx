import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { PaginationDocsComponent } from './pagination-docs.component';

import { PaginationExampleComponent } from './examples/pagination-example.component';
import { PaginationShowingExampleComponent } from './examples/pagination-showing-example.component';
import { PaginationPerPageExampleComponent } from './examples/pagination-per-page/pagination-per-page-example.component';
import { PaginationMobileExampleComponent } from './examples/pagination-mobile/pagination-mobile-example.component';

import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';
import { DeprecatedPaginationCompactDirective, PaginationModule } from '@fundamental-ngx/core/pagination';
import { ToolbarModule } from '@fundamental-ngx/core/toolbar';
import { SelectModule } from '@fundamental-ngx/core/select';
import { SegmentedButtonModule } from '@fundamental-ngx/core/segmented-button';
import { moduleDeprecationsProvider } from '@fundamental-ngx/core/utils';

const routes: Routes = [
    {
        path: '',
        component: PaginationHeaderComponent,
        children: [
            { path: '', component: PaginationDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.pagination } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        PaginationModule,
        ToolbarModule,
        SelectModule,
        SegmentedButtonModule
    ],
    exports: [RouterModule],
    declarations: [
        PaginationDocsComponent,
        PaginationHeaderComponent,
        PaginationExampleComponent,
        PaginationShowingExampleComponent,
        PaginationPerPageExampleComponent,
        PaginationMobileExampleComponent
    ],
    providers: [moduleDeprecationsProvider(DeprecatedPaginationCompactDirective)]
})
export class PaginationDocsModule {}
