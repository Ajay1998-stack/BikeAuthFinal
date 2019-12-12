import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNavigationComponent } from './map-navigation.component';

describe('MapNavigationComponent', () => {
  let component: MapNavigationComponent;
  let fixture: ComponentFixture<MapNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
