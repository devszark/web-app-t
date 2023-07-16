import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './feature/form/form.component';
import { SearchListComponent } from './feature/search-list/search-list.component';
import { ToolbarComponent } from './feature/toolbar/toolbar.component';
import { PreviewComponent } from './feature/preview/preview.component';
import { CustomizeComponent } from './feature/customize/customize.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchListComponent,
    ToolbarComponent,
    PreviewComponent,
    CustomizeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
