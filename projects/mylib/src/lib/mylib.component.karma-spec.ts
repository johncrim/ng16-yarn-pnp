import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylibComponent } from './mylib.component';

describe('MylibComponent', () => {
  let component: MylibComponent;
  let fixture: ComponentFixture<MylibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MylibComponent]
    });
    fixture = TestBed.createComponent(MylibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
