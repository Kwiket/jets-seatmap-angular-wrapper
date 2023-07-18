import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import MyReactComponent from './MyReactComponent';

@Component({
  selector: 'seatmap',
  template: '<div [id]="rootId"></div>',
})
export class SeatmapAngularLibComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() flight = {};
  @Input() config = {};
  @Input() availability: any[] = [];
  @Input() passengers: any[] = [];
  @Input() currentDeckIndex: number = 0;
  @Output() onSeatMapInited = new EventEmitter<any>();
  @Output() onSeatSelected = new EventEmitter<any>();
  @Output() onSeatUnselected = new EventEmitter<any>();
  @Output() onTooltipRequested = new EventEmitter<any>();
  @Output() onLayoutUpdated = new EventEmitter<any>();
  @Output() onSeatMouseLeave = new EventEmitter<any>();
  @Output() onSeatMouseClick = new EventEmitter<any>();

  public rootId = 'rootId';
  public rootReact: any = null;

  ngAfterViewInit() {
    const root_elem = document.getElementById(this.rootId);
    if (root_elem && !this.rootReact) {
      this.rootReact = ReactDOM.createRoot(root_elem);
    }
    this.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.render();
  }

  ngOnDestroy() {}

  private render() {
    const reactProps = {
      flight: this.flight,
      config: this.config,
      currentDeckIndex: this.currentDeckIndex,
      availability: this.availability,
      passengers: this.passengers,
      onSeatMapInited: (data: any) => {
        this.onSeatMapInited.emit(data);
      },
      onSeatSelected: (data: any) => {
        this.onSeatSelected.emit(data);
      },
      onSeatUnselected: (data: any) => {
        this.onSeatUnselected.emit(data);
      },
      onTooltipRequested: (data: any) => {
        this.onTooltipRequested.emit(data);
      },
      onLayoutUpdated: (data: any) => {
        this.onLayoutUpdated.emit(data);
      },
      onSeatMouseLeave: (data: any) => {
        this.onSeatMouseLeave.emit(data);
      },
      onSeatMouseClick: (data: any) => {
        this.onSeatMouseClick.emit(data);
      },
    };

    if (this.rootReact) {
      this.rootReact.render(React.createElement(MyReactComponent, reactProps));
    }
  }
}
