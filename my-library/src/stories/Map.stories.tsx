import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TileLayer } from "react-leaflet";
import Map from "../components/Map";

export default {
  title: "Example/Map",
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;

export const BasicMap = Template.bind({});
BasicMap.args = {
  width: "50%",
  height: "50%",
  bounds: [
    [42.5993718217880613, 1.5937492475355806],
    [45.9312500000000341, 7.6656250000000341]
  ],
  children: <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
};
