import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerPromoComponent } from './flyer-promo.component';

describe('FlyerPromoComponent', () => {
  let component: FlyerPromoComponent;
  let fixture: ComponentFixture<FlyerPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlyerPromoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlyerPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
