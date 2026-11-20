import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageInspectionComponent } from './package-inspection-component';

describe('PackageInspectionComponent', () => {
  let component: PackageInspectionComponent;
  let fixture: ComponentFixture<PackageInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageInspectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PackageInspectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
