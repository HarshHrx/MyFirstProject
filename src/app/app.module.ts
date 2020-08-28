import { AppErrorHandler } from './demo2/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
// import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AshkyaformComponent } from './ashkyaform/ashkyaform.component';
import { HrxComponent } from './hrx/hrx.component';
import { ReactiveformarrayComponent } from './reactiveformarray/reactiveformarray.component';
import { ServiceconsumeComponent } from './serviceconsume/serviceconsume.component';
import { DemocrudComponent } from './democrud/democrud.component';
import { Demo2Component } from './demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    TemplateFormComponent,
    TemplatedrivenformComponent,
    // ReactiveformComponent,
    AshkyaformComponent,
    HrxComponent,
    ReactiveformarrayComponent,
    ServiceconsumeComponent,
    DemocrudComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:ErrorHandler,useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
