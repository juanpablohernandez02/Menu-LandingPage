import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualMapComponent } from './conceptual-map.component';

describe('ConceptualMapComponent', () => {
  let component: ConceptualMapComponent;
  let fixture: ComponentFixture<ConceptualMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptualMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConceptualMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
