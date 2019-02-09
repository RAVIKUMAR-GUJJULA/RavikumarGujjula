import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RavikumarGujjulaBlogModule } from './blog/blog.module';
import { RavikumarGujjulaEntryModule } from './entry/entry.module';
import { RavikumarGujjulaTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        RavikumarGujjulaBlogModule,
        RavikumarGujjulaEntryModule,
        RavikumarGujjulaTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RavikumarGujjulaEntityModule {}
