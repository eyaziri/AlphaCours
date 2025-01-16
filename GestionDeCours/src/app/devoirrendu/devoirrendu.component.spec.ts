import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoirrenduComponent } from './devoirrendu.component';

describe('DevoirrenduComponent', () => {
  let component: DevoirrenduComponent;
  let fixture: ComponentFixture<DevoirrenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoirrenduComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoirrenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});