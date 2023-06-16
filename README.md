# SeatmapAngularWrapper

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. For installation from root folder contents of the `dist/` directory will be copied to the root. This may be changed later

# Angular wrapper for Seatmap react app

## Integration process

1. Add lib dependency to `package.json` and run `npm i`

```
"seatmap-angular-lib": "github:Kwiket/jets-seatmap-angular-wrapper"
```

2. Import module into your `app.module.ts` and add it to `imports`

```ts
import { SeatmapAngularLibModule } from 'seatmap-angular-lib';
...

@NgModule({
  declarations: [
    AppComponent,
    ...
  ],
  imports: [
    ...
    SeatmapAngularLibModule,
    ...
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

3. See usage below

## Usage

```html
<seatmap
  [config]="config"
  [flight]="flight"
  [availability]="availability"
  [passengers]="passengers"
  [currentDeckIndex]="deckIndex"
  (onSeatMapInited)="onSeatInit"
  (onSeatSelected)="onSeatSelect"
  (onSeatUnselected)="onSeatUnselect"
  (onTooltipRequested)="onTooltipRequested"
  (onLayoutUpdated)="onLayoutUpdated"
></seatmap>
```

For better undertanding how it works read [React lib doc](https://github.com/Kwiket/jets-seatmap-react-lib-pub) and [Integration instruction](https://github.com/Kwiket/jets-seatmap-react-lib-pub/blob/version-2/SEATMAP-INTEGRATION.md)
