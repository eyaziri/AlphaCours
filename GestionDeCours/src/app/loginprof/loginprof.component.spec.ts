import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginprofComponent } from './loginprof.component';

describe('LoginprofComponent', () => {
  let component: LoginprofComponent;
  let fixture: ComponentFixture<LoginprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginprofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
