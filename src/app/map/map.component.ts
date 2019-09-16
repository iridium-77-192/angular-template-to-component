import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { Marker } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() marker: Marker;
  @ViewChild('holder', { read: ElementRef }) markerHolder: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.drawMarker();
  }

  ngOnChanges() {
    this.drawMarker();
  }

  drawMarker() {
    if (this.marker) {
      setTimeout(_ => {

        /* this call actually extracts the elements from DOM and places them somewhere else */
        this.renderer.appendChild(this.markerHolder.nativeElement, this.marker.element.nativeElement);
      }, 100);
    }
  }

}
