import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingProjectsComponent } from './upcoming-projects.component';

describe('UpcomingProjectsComponent', () => {
  let component: UpcomingProjectsComponent;
  let fixture: ComponentFixture<UpcomingProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingProjectsComponent]
    });
    fixture = TestBed.createComponent(UpcomingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
