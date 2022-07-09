import * as React from "react";
import styled from "styled-components";
import { MapContainer, MapContainerProps } from "react-leaflet";

import "leaflet/dist/leaflet.css";

interface MapWrapperProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}

const MapWrapper = styled(MapContainer)<MapWrapperProps>`
  width: ${(props) => (props.width ? props.width : "100vw")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "400px")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "400px")};
`;

interface MapElementProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}

const Map: React.FunctionComponent<MapElementProps & MapContainerProps> = ({
  width,
  height,
  minWidth,
  minHeight,
  children,
  ...rest
}) => {
  return (
    <MapWrapper
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      {...rest}
    >
      {children}
    </MapWrapper>
  );
};

export default Map;
