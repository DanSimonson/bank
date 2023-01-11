import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    CurrencyConverterComponent,
    PageNotFoundComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
