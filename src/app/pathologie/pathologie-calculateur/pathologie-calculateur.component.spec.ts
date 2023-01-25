import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologieCalculateurComponent } from './pathologie-calculateur.component';

describe('PathologieCalculateurComponent', () => {
  let component: PathologieCalculateurComponent;
  let fixture: ComponentFixture<PathologieCalculateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologieCalculateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathologieCalculateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
