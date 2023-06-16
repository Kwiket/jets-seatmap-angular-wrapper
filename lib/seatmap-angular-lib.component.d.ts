import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SeatmapAngularLibComponent implements OnChanges, AfterViewInit, OnDestroy {
    flight: {};
    config: {};
    availability: any[];
    passengers: any[];
    currentDeckIndex: number;
    onSeatMapInited: EventEmitter<any>;
    onSeatSelected: EventEmitter<any>;
    onSeatUnselected: EventEmitter<any>;
    onTooltipRequested: EventEmitter<any>;
    onLayoutUpdated: EventEmitter<any>;
    rootId: string;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private render;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeatmapAngularLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SeatmapAngularLibComponent, "seatmap", never, { "flight": "flight"; "config": "config"; "availability": "availability"; "passengers": "passengers"; "currentDeckIndex": "currentDeckIndex"; }, { "onSeatMapInited": "onSeatMapInited"; "onSeatSelected": "onSeatSelected"; "onSeatUnselected": "onSeatUnselected"; "onTooltipRequested": "onTooltipRequested"; "onLayoutUpdated": "onLayoutUpdated"; }, never, never, false, never>;
}
