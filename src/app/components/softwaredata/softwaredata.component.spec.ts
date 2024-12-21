import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaredataComponent } from './softwaredata.component';

describe('SoftwaredataComponent', () => {
  let component: SoftwaredataComponent;
  let fixture: ComponentFixture<SoftwaredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwaredataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwaredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
