import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import { Lib1Module } from '@scope/lib1';

@NgModule({
  imports: [
    Lib1Module,
  ],
  declarations: [Lib2Component],
  exports: [Lib2Component]
})
export class Lib2Module { }
