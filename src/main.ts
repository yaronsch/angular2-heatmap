import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import {HeatmapModule} from "./heatmap/";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HeatmapModule);
