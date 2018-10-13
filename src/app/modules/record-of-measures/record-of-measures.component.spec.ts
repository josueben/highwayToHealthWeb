import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfMeasuresComponent } from './record-of-measures.component';

describe('RecordOfMeasuresComponent', () => {
  let component: RecordOfMeasuresComponent;
  let fixture: ComponentFixture<RecordOfMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordOfMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordOfMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
