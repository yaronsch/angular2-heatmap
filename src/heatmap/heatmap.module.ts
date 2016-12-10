import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeatmapComponent} from './heatmap.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HeatmapComponent
    ],
    declarations: [HeatmapComponent]
})
export class HeatmapModule {
}
