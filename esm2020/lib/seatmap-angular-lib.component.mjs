import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import MyReactComponent from './MyReactComponent';
import * as i0 from "@angular/core";
export class SeatmapAngularLibComponent {
    constructor() {
        this.rootId = 'rootId';
        this.flight = {};
        this.config = {};
        this.availability = [];
        this.passengers = [];
        this.seatJumpTo = {};
        this.currentDeckIndex = 0;
        this.onSeatMapInited = new EventEmitter();
        this.onSeatSelected = new EventEmitter();
        this.onSeatUnselected = new EventEmitter();
        this.onTooltipRequested = new EventEmitter();
        this.onLayoutUpdated = new EventEmitter();
        this.onSeatMouseLeave = new EventEmitter();
        this.onSeatMouseClick = new EventEmitter();
        this.onAvailabilityApplied = new EventEmitter();
        this.rootReact = null;
    }
    ngAfterViewInit() {
        console.log('======== [SEATMAP ANGULAR LIB] ngAfterViewInit ===========', {
            flight: this.flight,
            passengers: this.passengers,
            availability: this.availability,
            seatJumpTo: this.seatJumpTo,
        });
        const root_elem = document.getElementById(this.rootId);
        if (root_elem && !this.rootReact) {
            this.rootReact = ReactDOM.createRoot(root_elem);
        }
        this.render();
    }
    ngOnChanges(changes) {
        console.log('======== [SEATMAP ANGULAR LIB] ngOnChanges ===========', {
            flight: this.flight,
            passengers: this.passengers,
            availability: this.availability,
            seatJumpTo: this.seatJumpTo,
        });
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
            seatJumpTo: this.seatJumpTo,
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
            onAvailabilityApplied: (data) => {
                this.onAvailabilityApplied.emit(data);
            },
        };
        console.log('======== [SEATMAP ANGULAR LIB] render ===========', reactProps);
        if (this.rootReact) {
            this.rootReact.render(React.createElement(MyReactComponent, reactProps));
        }
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { rootId: "rootId", flight: "flight", config: "config", availability: "availability", passengers: "passengers", seatJumpTo: "seatJumpTo", currentDeckIndex: "currentDeckIndex" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected", onTooltipRequested: "onTooltipRequested", onLayoutUpdated: "onLayoutUpdated", onSeatMouseLeave: "onSeatMouseLeave", onSeatMouseClick: "onSeatMouseClick", onAvailabilityApplied: "onAvailabilityApplied" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SeatmapAngularLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'seatmap',
                    template: '<div [id]="rootId"></div>',
                }]
        }], propDecorators: { rootId: [{
                type: Input
            }], flight: [{
                type: Input
            }], config: [{
                type: Input
            }], availability: [{
                type: Input
            }], passengers: [{
                type: Input
            }], seatJumpTo: [{
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
            }], onAvailabilityApplied: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7O0FBTWxELE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLVyxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM1QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0MsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM3QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFbkQsY0FBUyxHQUFRLElB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WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7dUhBcEZVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLGlrQkFGM0IsMkJBQTJCOzJGQUUxQiwwQkFBMEI7a0JBSnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDSSxlQUFlO3NCQUF4QixNQUFNO2dCQUNHLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csZ0JBQWdCO3NCQUF6QixNQUFNO2dCQUNHLGtCQUFrQjtzQkFBM0IsTUFBTTtnQkFDRyxlQUFlO3NCQUF4QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBQ0cscUJBQXFCO3NCQUE5QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuXG5pbXBvcnQgTXlSZWFjdENvbXBvbmVudCBmcm9tICcuL015UmVhY3RDb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWF0bWFwJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IFtpZF09XCJyb290SWRcIj48L2Rpdj4nLFxufSlcbmV4cG9ydCBjbGFzcyBTZWF0bWFwQW5ndWxhckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcm9vdElkID0gJ3Jvb3RJZCc7XG4gIEBJbnB1dCgpIGZsaWdodCA9IHt9O1xuICBASW5wdXQoKSBjb25maWcgPSB7fTtcbiAgQElucHV0KCkgYXZhaWxhYmlsaXR5OiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBwYXNzZW5nZXJzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBzZWF0SnVtcFRvOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgY3VycmVudERlY2tJbmRleDogbnVtYmVyID0gMDtcbiAgQE91dHB1dCgpIG9uU2VhdE1hcEluaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhdFVuc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uVG9vbHRpcFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25MYXlvdXRVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRNb3VzZUxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRNb3VzZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkF2YWlsYWJpbGl0eUFwcGxpZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgcm9vdFJlYWN0OiBhbnkgPSBudWxsO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT0gW1NFQVRNQVAgQU5HVUxBUiBMSUJdIG5nQWZ0ZXJWaWV3SW5pdCA9PT09PT09PT09PScsIHtcbiAgICAgIGZsaWdodDogdGhpcy5mbGlnaHQsXG4gICAgICBwYXNzZW5nZXJzOiB0aGlzLnBhc3NlbmdlcnMsXG4gICAgICBhdmFpbGFiaWxpdHk6IHRoaXMuYXZhaWxhYmlsaXR5LFxuICAgICAgc2VhdEp1bXBUbzogdGhpcy5zZWF0SnVtcFRvLFxuICAgIH0pO1xuICAgIGNvbnN0IHJvb3RfZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdElkKTtcbiAgICBpZiAocm9vdF9lbGVtICYmICF0aGlzLnJvb3RSZWFjdCkge1xuICAgICAgdGhpcy5yb290UmVhY3QgPSBSZWFjdERPTS5jcmVhdGVSb290KHJvb3RfZWxlbSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coJz09PT09PT09IFtTRUFUTUFQIEFOR1VMQVIgTElCXSBuZ09uQ2hhbmdlcyA9PT09PT09PT09PScsIHtcbiAgICAgIGZsaWdodDogdGhpcy5mbGlnaHQsXG4gICAgICBwYXNzZW5nZXJzOiB0aGlzLnBhc3NlbmdlcnMsXG4gICAgICBhdmFpbGFiaWxpdHk6IHRoaXMuYXZhaWxhYmlsaXR5LFxuICAgICAgc2VhdEp1bXBUbzogdGhpcy5zZWF0SnVtcFRvLFxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVhY3RQcm9wcyA9IHtcbiAgICAgIGZsaWdodDogdGhpcy5mbGlnaHQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY3VycmVudERlY2tJbmRleDogdGhpcy5jdXJyZW50RGVja0luZGV4LFxuICAgICAgYXZhaWxhYmlsaXR5OiB0aGlzLmF2YWlsYWJpbGl0eSxcbiAgICAgIHBhc3NlbmdlcnM6IHRoaXMucGFzc2VuZ2VycyxcbiAgICAgIHNlYXRKdW1wVG86IHRoaXMuc2VhdEp1bXBUbyxcbiAgICAgIG9uU2VhdE1hcEluaXRlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdE1hcEluaXRlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uU2VhdFNlbGVjdGVkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0U2VsZWN0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblNlYXRVbnNlbGVjdGVkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0VW5zZWxlY3RlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uVG9vbHRpcFJlcXVlc3RlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uVG9vbHRpcFJlcXVlc3RlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uTGF5b3V0VXBkYXRlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uTGF5b3V0VXBkYXRlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uU2VhdE1vdXNlTGVhdmU6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNb3VzZUxlYXZlLmVtaXQoZGF0YSk7XG4gICAgICB9LFxuICAgICAgb25TZWF0TW91c2VDbGljazogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdE1vdXNlQ2xpY2suZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvbkF2YWlsYWJpbGl0eUFwcGxpZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vbkF2YWlsYWJpbGl0eUFwcGxpZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKCc9PT09PT09PSBbU0VBVE1BUCBBTkdVTEFSIExJQl0gcmVuZGVyID09PT09PT09PT09JywgcmVhY3RQcm9wcyk7XG5cbiAgICBpZiAodGhpcy5yb290UmVhY3QpIHtcbiAgICAgIHRoaXMucm9vdFJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE15UmVhY3RDb21wb25lbnQsIHJlYWN0UHJvcHMpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==