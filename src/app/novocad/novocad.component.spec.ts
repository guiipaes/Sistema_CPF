/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NovocadComponent } from './novocad.component';

describe('NovocadComponent', () => {
  let component: NovocadComponent;
  let fixture: ComponentFixture<NovocadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovocadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovocadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
