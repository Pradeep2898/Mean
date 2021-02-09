import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsEditComponent } from './components/students-edit/students-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentsAddComponent,
    StudentsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
