import {Component, AfterViewInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import * as h337 from 'heatmap.js/build/heatmap.js';

const DEFAULT_CONFIG = {
    radius: 10,
    maxOpacity: .5,
    minOpacity: 0,
    blur: .75
};
const DEFAULT_DATA_MIN = 0;
const DEFAULT_DATA_MAX = 10;

@Component({
    selector: 'heatmap',
    template: `<div class="heatmap" #heatmap [ngStyle]="{height: height || '100%'}"></div>`,
    encapsulation: ViewEncapsulation.None
})
export class HeatmapComponent implements AfterViewInit, OnChanges {
    @Input() data: any[] = [];
    @Input() config: any = {};
    @Input() width: number;
    @Input() height: number;
    @Input() dataMin: number = DEFAULT_DATA_MIN;
    @Input() dataMax: number = DEFAULT_DATA_MAX;
    @ViewChild('heatmap') container: ElementRef;

    private heatmapInstance;

    ngAfterViewInit() {
        let element = this.container.nativeElement;
        let width = this.width || element.offsetWidth;
        let height = this.height || element.offsetHeight;
        let config = Object.assign({container: element}, DEFAULT_CONFIG, {width, height}, this.config);
        this.heatmapInstance = h337.create(config);
        this.setHeatmapData();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data'] && this.heatmapInstance) {
            this.setHeatmapData();
        }
    }

    setHeatmapData() {
        let data = {min: this.dataMin, max: this.dataMax, data: this.data};
        this.heatmapInstance.setData(data);
    }

}
