import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioIdentificationComponent } from './scenario-identification.component';

describe('ScenarioIdentificationComponent', () => {
  let component: ScenarioIdentificationComponent;
  let fixture: ComponentFixture<ScenarioIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioIdentificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScenarioIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
