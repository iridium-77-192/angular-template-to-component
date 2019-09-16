import { Component, OnInit, ViewChild, ElementRef, Renderer2, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private count = 0;
  private marker: Marker;
  @ViewChild('mymarker', { read: ElementRef }) myMarkerEl: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    setTimeout(_ => {

      this.marker = new Marker();
      this.marker.element = this.myMarkerEl;
      this.marker.lat = 25;
      this.marker.lon = 45;
    }, 3000);
  }

  onMarkerButtonClick() {
    this.count++;
    this.marker.lat++;
  }

}


export class Marker {
  element: any;
  lat: number;
  lon: number;
}
