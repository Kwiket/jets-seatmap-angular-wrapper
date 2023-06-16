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
        this.rootId = 'rootId';
    }
    ngOnChanges(changes) {
        this.render();
    }
    ngAfterViewInit() {
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
        };
        const root_elem = document.getElementById(this.rootId);
        if (root_elem) {
            const rootReact = ReactDOM.createRoot(root_elem);
            rootReact.render(React.createElement(MyReactComponent, reactProps));
        }
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { flight: "flight", config: "config", availability: "availability", passengers: "passengers", currentDeckIndex: "currentDeckIndex" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected", onTooltipRequested: "onTooltipRequested", onLayoutUpdated: "onLayoutUpdated" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7O0FBTWxELE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLVyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3QyxXQUFNLEdBQUcsUUFBUSxDQUFDO0tBeUMxQjtJQXZDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXLEtBQUksQ0FBQztJQUVSLE1BQU07UUFDWixNQUFNLFVBQVUsR0FBRztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQztZQUNELGNBQWMsRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBQ0QsZUFBZSxFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7U0FDRixDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxTQUFTLEVBQUU7WUFDYixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7dUhBcERVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLHlaQUYzQiwyQkFBMkI7MkZBRTFCLDBCQUEwQjtrQkFKdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OEJBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNJLGVBQWU7c0JBQXhCLE1BQU07Z0JBQ0csY0FBYztzQkFBdkIsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBQ0csa0JBQWtCO3NCQUEzQixNQUFNO2dCQUNHLGVBQWU7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5cbmltcG9ydCBNeVJlYWN0Q29tcG9uZW50IGZyb20gJy4vTXlSZWFjdENvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlYXRtYXAnLFxuICB0ZW1wbGF0ZTogJzxkaXYgW2lkXT1cInJvb3RJZFwiPjwvZGl2PicsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXRtYXBBbmd1bGFyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBmbGlnaHQgPSB7fTtcbiAgQElucHV0KCkgY29uZmlnID0ge307XG4gIEBJbnB1dCgpIGF2YWlsYWJpbGl0eTogYW55W10gPSBbXTtcbiAgQElucHV0KCkgcGFzc2VuZ2VyczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgY3VycmVudERlY2tJbmRleDogbnVtYmVyID0gMDtcbiAgQE91dHB1dCgpIG9uU2VhdE1hcEluaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhdFVuc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uVG9vbHRpcFJlcXVlc3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25MYXlvdXRVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHJvb3RJZCA9ICdyb290SWQnO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVhY3RQcm9wcyA9IHtcbiAgICAgIGZsaWdodDogdGhpcy5mbGlnaHQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY3VycmVudERlY2tJbmRleDogdGhpcy5jdXJyZW50RGVja0luZGV4LFxuICAgICAgYXZhaWxhYmlsaXR5OiB0aGlzLmF2YWlsYWJpbGl0eSxcbiAgICAgIHBhc3NlbmdlcnM6IHRoaXMucGFzc2VuZ2VycyxcbiAgICAgIG9uU2VhdE1hcEluaXRlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdE1hcEluaXRlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uU2VhdFNlbGVjdGVkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0U2VsZWN0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblNlYXRVbnNlbGVjdGVkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0VW5zZWxlY3RlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uVG9vbHRpcFJlcXVlc3RlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uVG9vbHRpcFJlcXVlc3RlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uTGF5b3V0VXBkYXRlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uTGF5b3V0VXBkYXRlZC5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHJvb3RfZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdElkKTtcbiAgICBpZiAocm9vdF9lbGVtKSB7XG4gICAgICBjb25zdCByb290UmVhY3QgPSBSZWFjdERPTS5jcmVhdGVSb290KHJvb3RfZWxlbSk7XG4gICAgICByb290UmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXlSZWFjdENvbXBvbmVudCwgcmVhY3RQcm9wcykpO1xuICAgIH1cbiAgfVxufVxuIl19