import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-marker',
  templateUrl: './custom-marker.component.html',
  styleUrls: ['./custom-marker.component.scss']
})
export class CustomMarkerComponent implements OnInit {
  @Input() label: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log('CustomMarker OnInit');
  }

  onClick(event: Event) {
    event.stopImmediatePropagation();
    this.buttonClick.emit(void 0);
  }
}
