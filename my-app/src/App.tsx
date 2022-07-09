import { Button, Map } from '@soulweblab/my-library';
import { TileLayer } from 'react-leaflet';
import type { LatLngBoundsExpression } from 'leaflet';

import "leaflet/dist/leaflet.css";

const App = () => {
  const args = {
    label: "Default button",
    style: {
      padding: "20px",
      width: "20em",
      margin: "10px",
      color: "lightblue",
      fontSize: "19px",
      cursor: "pointer",
      border: "1px solid darkblue",
      background: "darkblue",
    },
    onClick: () => {
      console.log("You clicked the Default button");
    },
  };

  const bounds: LatLngBoundsExpression = [
    [42.5993718217880613, 1.5937492475355806],
    [45.9312500000000341, 7.6656250000000341]
	  ];

  return (
    <div>
        <div>
          <Button label="My Library" style={args.style} onClick={args.onClick} />
        </div>

        <div>
          <Map width="100vw" bounds={bounds}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          </Map>
        </div>
    </div>
  );
}

export default App;
