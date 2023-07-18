import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import MyReactComponent from './MyReactComponent';
import * as i0 from "@angular/core";
export class SeatmapAngularLibComponent {
    constructor() {
        this.flight = {};
        this.config = {};
        this.availability = [];
        this.passengers = [];
        this.currentDeckIndex = 0;
        this.onSeatMapInited = new EventEmitter();
        this.onSeatSelected = new EventEmitter();
        this.onSeatUnselected = new EventEmitter();
        this.onTooltipRequested = new EventEmitter();
        this.onLayoutUpdated = new EventEmitter();
        this.onSeatMouseLeave = new EventEmitter();
        this.onSeatMouseClick = new EventEmitter();
        this.rootId = 'rootId';
        this.rootReact = null;
    }
    ngAfterViewInit() {
        const root_elem = document.getElementById(this.rootId);
        if (root_elem && !this.rootReact) {
            this.rootReact = ReactDOM.createRoot(root_elem);
        }
        this.render();
    }
    ngOnChanges(changes) {
        this.render();
    }
    ngOnDestroy() { }
    render() {
        const reactProps = {
            flight: this.flight,
            config: this.config,
            currentDeckIndex: this.currentDeckIndex,
            availability: this.availability,
            passengers: this.passengers,
            onSeatMapInited: (data) => {
                this.onSeatMapInited.emit(data);
            },
            onSeatSelected: (data) => {
                this.onSeatSelected.emit(data);
            },
            onSeatUnselected: (data) => {
                this.onSeatUnselected.emit(data);
            },
            onTooltipRequested: (data) => {
                this.onTooltipRequested.emit(data);
            },
            onLayoutUpdated: (data) => {
                this.onLayoutUpdated.emit(data);
            },
            onSeatMouseLeave: (data) => {
                this.onSeatMouseLeave.emit(data);
            },
            onSeatMouseClick: (data) => {
                this.onSeatMouseClick.emit(data);
            },
        };
        if (this.rootReact) {
            this.rootReact.render(React.createElement(MyReactComponent, reactProps));
        }
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { flight: "flight", config: "config", availability: "availability", passengers: "passengers", currentDeckIndex: "currentDeckIndex" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected", onTooltipRequested: "onTooltipRequested", onLayoutUpdated: "onLayoutUpdated", onSeatMouseLeave: "onSeatMouseLeave", onSeatMouseClick: "onSeatMouseClick" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SeatmapAngularLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'seatmap',
                    template: '<div [id]="rootId"></div>',
                }]
        }], propDecorators: { flight: [{
                type: Input
            }], config: [{
                type: Input
            }], availability: [{
                type: Input
            }], passengers: [{
                type: Input
            }], currentDeckIndex: [{
                type: Input
            }], onSeatMapInited: [{
                type: Output
            }], onSeatSelected: [{
                type: Output
            }], onSeatUnselected: [{
                type: Output
            }], onTooltipRequested: [{
                type: Output
            }], onLayoutUpdated: [{
                type: Output
            }], onSeatMouseLeave: [{
                type: Output
            }], onSeatMouseClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7O0FBTWxELE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLVyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFOUMsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixjQUFTLEdBQVEsSUFBSSxDQUFDO0tBa0Q5QjtJQWhEQyxlQUFlO1FBQ2IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsV0FBVyxLQUFJLENBQUM7SUFFUixNQUFNO1FBQ1osTUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxjQUFjLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELGdCQUFnQixFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELGtCQUFrQixFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUNELGVBQWUsRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1NBQ0YsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzt1SEFoRVUsMEJBQTBCOzJHQUExQiwwQkFBMEIscWVBRjNCLDJCQUEyQjsyRkFFMUIsMEJBQTBCO2tCQUp0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs4QkFFVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0ksZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxrQkFBa0I7c0JBQTNCLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBQ0csZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuXG5pbXBvcnQgTXlSZWFjdENvbXBvbmVudCBmcm9tICcuL015UmVhY3RDb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWF0bWFwJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IFtpZF09XCJyb290SWRcIj48L2Rpdj4nLFxufSlcbmV4cG9ydCBjbGFzcyBTZWF0bWFwQW5ndWxhckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZmxpZ2h0ID0ge307XG4gIEBJbnB1dCgpIGNvbmZpZyA9IHt9O1xuICBASW5wdXQoKSBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHBhc3NlbmdlcnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGN1cnJlbnREZWNrSW5kZXg6IG51bWJlciA9IDA7XG4gIEBPdXRwdXQoKSBvblNlYXRNYXBJbml0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRVbnNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblRvb2x0aXBSZXF1ZXN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uTGF5b3V0VXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0TW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0TW91c2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyByb290SWQgPSAncm9vdElkJztcbiAgcHVibGljIHJvb3RSZWFjdDogYW55ID0gbnVsbDtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3Qgcm9vdF9lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5yb290SWQpO1xuICAgIGlmIChyb290X2VsZW0gJiYgIXRoaXMucm9vdFJlYWN0KSB7XG4gICAgICB0aGlzLnJvb3RSZWFjdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3Qocm9vdF9lbGVtKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJlYWN0UHJvcHMgPSB7XG4gICAgICBmbGlnaHQ6IHRoaXMuZmxpZ2h0LFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGN1cnJlbnREZWNrSW5kZXg6IHRoaXMuY3VycmVudERlY2tJbmRleCxcbiAgICAgIGF2YWlsYWJpbGl0eTogdGhpcy5hdmFpbGFiaWxpdHksXG4gICAgICBwYXNzZW5nZXJzOiB0aGlzLnBhc3NlbmdlcnMsXG4gICAgICBvblNlYXRNYXBJbml0ZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNYXBJbml0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblNlYXRTZWxlY3RlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdFNlbGVjdGVkLmVtaXQoZGF0YSk7XG4gICAgICB9LFxuICAgICAgb25TZWF0VW5zZWxlY3RlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdFVuc2VsZWN0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblRvb2x0aXBSZXF1ZXN0ZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblRvb2x0aXBSZXF1ZXN0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvbkxheW91dFVwZGF0ZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vbkxheW91dFVwZGF0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblNlYXRNb3VzZUxlYXZlOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0TW91c2VMZWF2ZS5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uU2VhdE1vdXNlQ2xpY2s6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNb3VzZUNsaWNrLmVtaXQoZGF0YSk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5yb290UmVhY3QpIHtcbiAgICAgIHRoaXMucm9vdFJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE15UmVhY3RDb21wb25lbnQsIHJlYWN0UHJvcHMpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==