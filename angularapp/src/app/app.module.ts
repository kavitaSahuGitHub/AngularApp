import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { DemodatabindingComponent } from './demodatabinding/demodatabinding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';
import { ChildComponetOutputDecoratorComponent } from './child-componet-output-decorator/child-componet-output-decorator.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttributedirComponent } from './attributedir/attributedir.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    DemodatabindingComponent,
    ChildComponent,
    DataBindingAssignmentComponent,
    ChildComponetOutputDecoratorComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    AttributedirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
