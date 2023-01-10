import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'search-users', component: SearchUsersComponent },
  { path: 'currency-conversion', component: CurrencyConverterComponent },
  {path: '', redirectTo: '/search-users', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
