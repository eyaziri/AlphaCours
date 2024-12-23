import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaldprofComponent } from './caldprof.component';

describe('CaldprofComponent', () => {
  let component: CaldprofComponent;
  let fixture: ComponentFixture<CaldprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaldprofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaldprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
