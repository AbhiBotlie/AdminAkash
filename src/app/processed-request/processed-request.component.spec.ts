import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedRequestComponent } from './processed-request.component';

describe('ProcessedRequestComponent', () => {
  let component: ProcessedRequestComponent;
  let fixture: ComponentFixture<ProcessedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
