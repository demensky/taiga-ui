import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiIsPresentPipeModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';

import {TuiIsPresentExample1} from './examples/1/component';
import {ExampleTuiIsPresentComponent} from './is-present.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiIsPresentComponent)),
        ReactiveFormsModule,
        TuiIsPresentPipeModule,
        TuiLinkDirective,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiButtonDirective,
        TuiLetModule,
    ],
    declarations: [ExampleTuiIsPresentComponent, TuiIsPresentExample1],
    exports: [ExampleTuiIsPresentComponent],
})
export class ExampleTuiIsPresentModule {}
