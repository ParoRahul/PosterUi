import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorthistotyComponent } from './shorthistoty.component';

describe('ShorthistotyComponent', () => {
  let component: ShorthistotyComponent;
  let fixture: ComponentFixture<ShorthistotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorthistotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorthistotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
