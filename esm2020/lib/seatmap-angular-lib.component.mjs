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
    ngOnChanges(changes) {
        this.render();
    }
    ngAfterViewInit() {
        const root_elem = document.getElementById(this.rootId);
        if (root_elem && !this.rootReact) {
            this.rootReact = ReactDOM.createRoot(root_elem);
        }
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
        this.rootReact.render(React.createElement(MyReactComponent, reactProps));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7O0FBTWxELE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLVyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFOUMsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixjQUFTLEdBQVEsSUFBSSxDQUFDO0tBZ0Q5QjtJQTlDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsV0FBVyxLQUFJLENBQUM7SUFFUixNQUFNO1FBQ1osTUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxjQUFjLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELGdCQUFnQixFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELGtCQUFrQixFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUNELGVBQWUsRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1NBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzt1SEE5RFUsMEJBQTBCOzJHQUExQiwwQkFBMEIscWVBRjNCLDJCQUEyQjsyRkFFMUIsMEJBQTBCO2tCQUp0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs4QkFFVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0ksZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxrQkFBa0I7c0JBQTNCLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBQ0csZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5cbmltcG9ydCBNeVJlYWN0Q29tcG9uZW50IGZyb20gJy4vTXlSZWFjdENvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlYXRtYXAnLFxuICB0ZW1wbGF0ZTogJzxkaXYgW2lkXT1cInJvb3RJZFwiPjwvZGl2PicsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXRtYXBBbmd1bGFyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBmbGlnaHQgPSB7fTtcbiAgQElucHV0KCkgY29uZmlnID0ge307XG4gIEBJbnB1dCgpIGF2YWlsYWJpbGl0eTogYW55W10gPSBbXTtcbiAgQElucHV0KCkgcGFzc2VuZ2VyczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgY3VycmVudERlY2tJbmRleDogbnVtYmVyID0gMDtcbiAgQE91dHB1dCgpIG9uU2VhdE1hcEluaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhdFVuc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uVG9vbHRpcFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25MYXlvdXRVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRNb3VzZUxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRNb3VzZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHJvb3RJZCA9ICdyb290SWQnO1xuICBwdWJsaWMgcm9vdFJlYWN0OiBhbnkgPSBudWxsO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHJvb3RfZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdElkKTtcbiAgICBpZiAocm9vdF9lbGVtICYmICF0aGlzLnJvb3RSZWFjdCkge1xuICAgICAgdGhpcy5yb290UmVhY3QgPSBSZWFjdERPTS5jcmVhdGVSb290KHJvb3RfZWxlbSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVhY3RQcm9wcyA9IHtcbiAgICAgIGZsaWdodDogdGhpcy5mbGlnaHQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY3VycmVudERlY2tJbmRleDogdGhpcy5jdXJyZW50RGVja0luZGV4LFxuICAgICAgYXZhaWxhYmlsaXR5OiB0aGlzLmF2YWlsYWJpbGl0eSxcbiAgICAgIHBhc3NlbmdlcnM6IHRoaXMucGFzc2VuZ2VycyxcbiAgICAgIG9uU2VhdE1hcEluaXRlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdE1hcEluaXRlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uU2VhdFNlbGVjdGVkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0U2VsZWN0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblNlYXRVbnNlbGVjdGVkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0VW5zZWxlY3RlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uVG9vbHRpcFJlcXVlc3RlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uVG9vbHRpcFJlcXVlc3RlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uTGF5b3V0VXBkYXRlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uTGF5b3V0VXBkYXRlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uU2VhdE1vdXNlTGVhdmU6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNb3VzZUxlYXZlLmVtaXQoZGF0YSk7XG4gICAgICB9LFxuICAgICAgb25TZWF0TW91c2VDbGljazogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdE1vdXNlQ2xpY2suZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMucm9vdFJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE15UmVhY3RDb21wb25lbnQsIHJlYWN0UHJvcHMpKTtcbiAgfVxufVxuIl19