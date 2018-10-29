import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lib2Service {

  constructor(
    lib1: Lib1Service,
  ) { }
}
