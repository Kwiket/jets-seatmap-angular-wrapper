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
        seatJumpTo={props.seatJumpTo}
        currentDeckIndex={props.currentDeckIndex}
        onSeatMapInited={props.onSeatMapInited}
        onSeatSelected={props.onSeatSelected}
        onSeatUnselected={props.onSeatUnselected}
        onTooltipRequested={props.onTooltipRequested}
        onLayoutUpdated={props.onLayoutUpdated}
        onSeatMouseLeave={props.onSeatMouseLeave}
        onSeatMouseClick={props.onSeatMouseClick}
        onAvailabilityApplied={props.onAvailabilityApplied}
      />
    </div>
  );
};

export default MyReactComponent;
