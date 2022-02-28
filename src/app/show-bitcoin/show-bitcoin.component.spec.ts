import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBitcoinComponent } from './show-bitcoin.component';

describe('ShowBitcoinComponent', () => {
  let component: ShowBitcoinComponent;
  let fixture: ComponentFixture<ShowBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBitcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
