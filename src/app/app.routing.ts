import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCharacterComponent} from './new-character/new-character.component'
import { PageComponent } from './page/page.component'
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewCharacterComponent
  },
  {
    path: ':character_id/:page_id',
    component: PageComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
