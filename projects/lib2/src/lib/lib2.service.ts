import { Injectable } from '@angular/core';
import { Lib1Service } from '@scope/lib1';

@Injectable({
  providedIn: 'root'
})
export class Lib2Service {

  constructor(
    lib1: Lib1Service,
  ) { }
}
