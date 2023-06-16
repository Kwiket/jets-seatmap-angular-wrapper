import * as React from 'react';

// @ts-ignore
import { JetsSeatMap } from 'jets-seatmap-react-lib';

const MyReactComponent = (props: any) => {
  return (
    <div>
      <JetsSeatMap
        flight={props.flight}
        config={props.config}
        availability={props.availability}
        passengers={props.passengers}
        currentDeckIndex={props.currentDeckIndex}
        onSeatMapInited={props.onSeatMapInited}
        onSeatSelected={props.onSeatSelected}
        onSeatUnselected={props.onSeatUnselected}
        onTooltipRequested={props.onTooltipRequested}
        onLayoutUpdated={props.onLayoutUpdated}
      />
    </div>
  );
};

export default MyReactComponent;
