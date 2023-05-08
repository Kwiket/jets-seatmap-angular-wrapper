import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from 'react/jsx-runtime';
import { JetsSeatMap } from 'jets-seatmap-react-lib';

class SeatmapAngularLibService {
    constructor() { }
}
SeatmapAngularLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SeatmapAngularLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const MyReactComponent = (props) => {
    return (jsx("div", { children: jsx(JetsSeatMap, { flight: props.flight, config: props.config, availability: props.availability, passengers: props.passengers, onSeatMapInited: props.onSeatMapInited, onSeatSelected: props.onSeatSelected, onSeatUnselected: props.onSeatUnselected }, void 0) }, void 0));
};

class SeatmapAngularLibComponent {
    constructor() {
        this.flight = {};
        this.config = {};
        this.availability = [];
        this.passengers = [];
        this.onSeatMapInited = new EventEmitter();
        this.onSeatSelected = new EventEmitter();
        this.onSeatUnselected = new EventEmitter();
        this.rootId = 'rootId';
    }
    ngOnChanges(changes) {
        this.render();
    }
    ngAfterViewInit() {
        this.render();
    }
    ngOnDestroy() {
    }
    render() {
        // ReactDOM.render(React.createElement(MyReactComponent ), document.getElementById(this.rootId));
        const reactProps = {
            flight: this.flight,
            config: this.config,
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
            }
        };
        console.log(document.getElementById(this.rootId));
        ReactDOM.render(React.createElement(MyReactComponent, reactProps), document.getElementById(this.rootId));
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { flight: "flight", config: "config", availability: "availability", passengers: "passengers" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'seatmap',
                    template: '<div [id]="rootId"></div>',
                    // styleUrls: ['./app.component.css']
                }]
        }], propDecorators: { flight: [{
                type: Input
            }], config: [{
                type: Input
            }], availability: [{
                type: Input
            }], passengers: [{
                type: Input
            }], onSeatMapInited: [{
                type: Output
            }], onSeatSelected: [{
                type: Output
            }], onSeatUnselected: [{
                type: Output
            }] } });

class SeatmapAngularLibModule {
}
SeatmapAngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SeatmapAngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibModule, declarations: [SeatmapAngularLibComponent], exports: [SeatmapAngularLibComponent] });
SeatmapAngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SeatmapAngularLibComponent
                    ],
                    imports: [],
                    exports: [
                        SeatmapAngularLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of seatmap-angular-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SeatmapAngularLibComponent, SeatmapAngularLibModule, SeatmapAngularLibService };
//# sourceMappingURL=seatmap-angular-lib.js.map