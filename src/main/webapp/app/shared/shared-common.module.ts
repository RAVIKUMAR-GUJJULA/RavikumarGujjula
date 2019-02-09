import { NgModule } from '@angular/core';

import { RavikumarGujjulaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RavikumarGujjulaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RavikumarGujjulaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RavikumarGujjulaSharedCommonModule {}
