import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { PersonItemComponent } from './person-item/person-item.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PersonItemComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
