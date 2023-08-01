import React from "react";
import type { SelectProps } from "antd";
import { Select, Typography } from "antd";
import bus_lines from "../assets/bus_lines.json";

const { Title } = Typography;

const options: SelectProps["options"] = [];

const busOptions = bus_lines.map(({ line_code, line_name }) => {
  return { label: line_code, value: line_code };
});

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <>
    <Title level={4}>{options.length} Items</Title>
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="Please select"
      //   defaultValue={}
      onChange={handleChange}
      options={busOptions}
    />
  </>
);

export default App;
