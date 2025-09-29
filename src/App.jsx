import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Chart, ChartSeries, ChartSeriesItem } from "@progress/kendo-react-charts";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Input } from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Switch } from "@progress/kendo-react-inputs";
import { ProgressBar } from "@progress/kendo-react-progressbars";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

const sampleData = [
  { product: "Laptop", price: 1200 },
  { product: "Phone", price: 800 },
  { product: "Tablet", price: 600 },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Kendo Price Dashboard</h1>

      {/* 1. Chart */}
      <Chart>
        <ChartSeries>
          <ChartSeriesItem type="column" data={[1200, 800, 600]} />
        </ChartSeries>
      </Chart>

      {/* 2. Grid */}
      <Grid style={{ height: "200px" }} data={sampleData}>
        <GridColumn field="product" title="Product" />
        <GridColumn field="price" title="Price ($)" />
      </Grid>

      {/* 3. Button */}
      <Button themeColor="primary" style={{ margin: "10px 0" }}>
        Refresh Prices
      </Button>

      {/* 4. DropDownList */}
      <DropDownList data={["USD", "EUR", "NGN"]} defaultValue="USD" />

      {/* 5. Input */}
      <Input placeholder="Enter product name" style={{ margin: "10px 0" }} />

      {/* 6. DatePicker */}
      <DatePicker defaultValue={new Date()} />

      {/* 7. Switch */}
      <div style={{ margin: "10px 0" }}>
        <Switch onLabel="On" offLabel="Off" />
      </div>

      {/* 8. ProgressBar */}
      <ProgressBar value={70} style={{ margin: "10px 0" }} />

      {/* 9. PanelBar */}
      <PanelBar>
        <PanelBarItem title="Dashboard Info">
          <p>This panel shows extra details about tracked products.</p>
        </PanelBarItem>
      </PanelBar>

      {/* 10. Extra Kendo Component (another Button) */}
      <Button themeColor="success">Export Data</Button>
    </div>
  );
}

export default App;
