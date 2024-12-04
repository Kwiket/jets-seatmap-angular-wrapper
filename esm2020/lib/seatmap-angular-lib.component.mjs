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
            onAvailabilityApplied: (data) => {
                this.onAvailabilityApplied.emit(data);
            },
        };
        if (this.rootReact) {
            this.rootReact.render(React.createElement(MyReactComponent, reactProps));
        }
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { rootId: "rootId", flight: "flight", config: "config", availability: "availability", passengers: "passengers", currentDeckIndex: "currentDeckIndex" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected", onTooltipRequested: "onTooltipRequested", onLayoutUpdated: "onLayoutUpdated", onSeatMouseLeave: "onSeatMouseLeave", onSeatMouseClick: "onSeatMouseClick", onAvailabilityApplied: "onAvailabilityApplied" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7O0FBTWxELE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLVyxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDN0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0MscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRW5ELGNBQVMsR0FBUSxJQUFJLENBQUM7S0FxRDlCO0lBbkRDLGVBQWU7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O2dCQUNHLGVBQWU7c0JBQXhCLE1BQU07Z0JBQ0csZ0JBQWdCO3NCQUF6QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxxQkFBcUI7c0JBQTlCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5cbmltcG9ydCBNeVJlYWN0Q29tcG9uZW50IGZyb20gJy4vTXlSZWFjdENvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlYXRtYXAnLFxuICB0ZW1wbGF0ZTogJzxkaXYgW2lkXT1cInJvb3RJZFwiPjwvZGl2PicsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXRtYXBBbmd1bGFyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSByb290SWQgPSAncm9vdElkJztcbiAgQElucHV0KCkgZmxpZ2h0ID0ge307XG4gIEBJbnB1dCgpIGNvbmZpZyA9IHt9O1xuICBASW5wdXQoKSBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHBhc3NlbmdlcnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGN1cnJlbnREZWNrSW5kZXg6IG51bWJlciA9IDA7XG4gIEBPdXRwdXQoKSBvblNlYXRNYXBJbml0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRVbnNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblRvb2x0aXBSZXF1ZXN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uTGF5b3V0VXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0TW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0TW91c2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25BdmFpbGFiaWxpdHlBcHBsaWVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHJvb3RSZWFjdDogYW55ID0gbnVsbDtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3Qgcm9vdF9lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5yb290SWQpO1xuICAgIGlmIChyb290X2VsZW0gJiYgIXRoaXMucm9vdFJlYWN0KSB7XG4gICAgICB0aGlzLnJvb3RSZWFjdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3Qocm9vdF9lbGVtKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJlYWN0UHJvcHMgPSB7XG4gICAgICBmbGlnaHQ6IHRoaXMuZmxpZ2h0LFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGN1cnJlbnREZWNrSW5kZXg6IHRoaXMuY3VycmVudERlY2tJbmRleCxcbiAgICAgIGF2YWlsYWJpbGl0eTogdGhpcy5hdmFpbGFiaWxpdHksXG4gICAgICBwYXNzZW5nZXJzOiB0aGlzLnBhc3NlbmdlcnMsXG4gICAgICBvblNlYXRNYXBJbml0ZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNYXBJbml0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblNlYXRTZWxlY3RlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdFNlbGVjdGVkLmVtaXQoZGF0YSk7XG4gICAgICB9LFxuICAgICAgb25TZWF0VW5zZWxlY3RlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdFVuc2VsZWN0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblRvb2x0aXBSZXF1ZXN0ZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblRvb2x0aXBSZXF1ZXN0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvbkxheW91dFVwZGF0ZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vbkxheW91dFVwZGF0ZWQuZW1pdChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvblNlYXRNb3VzZUxlYXZlOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0TW91c2VMZWF2ZS5lbWl0KGRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uU2VhdE1vdXNlQ2xpY2s6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNb3VzZUNsaWNrLmVtaXQoZGF0YSk7XG4gICAgICB9LFxuICAgICAgb25BdmFpbGFiaWxpdHlBcHBsaWVkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25BdmFpbGFiaWxpdHlBcHBsaWVkLmVtaXQoZGF0YSk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5yb290UmVhY3QpIHtcbiAgICAgIHRoaXMucm9vdFJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE15UmVhY3RDb21wb25lbnQsIHJlYWN0UHJvcHMpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==