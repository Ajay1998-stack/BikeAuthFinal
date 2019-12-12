import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStationsComponent } from './map-stations.component';

describe('MapStationsComponent', () => {
  let component: MapStationsComponent;
  let fixture: ComponentFixture<MapStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
