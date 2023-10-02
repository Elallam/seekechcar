import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrationAddComponent } from './adminstration-add.component';

describe('AdminstrationAddComponent', () => {
  let component: AdminstrationAddComponent;
  let fixture: ComponentFixture<AdminstrationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstrationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminstrationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
