import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  ColumnsDirective,
  RangesDirective,
  RangeDirective
} from "@syncfusion/ej2-react-spreadsheet";
import {
  RowsDirective,
  RowDirective,
  CellsDirective,
  CellDirective,
  ColumnDirective
} from "@syncfusion/ej2-react-spreadsheet";
import "./styles.css";
import { freezePaneData } from "./data";
function App() {
  const [freezeRowCount, setCount] = useState(1);
  const cellStyle = {
    fontSize: "12pt",
    fontWeight: "bold",
    textAlign: "center",
    verticalAlign: "middle"
  };

  const bold = { fontWeight: "bold" };
  return (
    <div>
      <div className="control-pane">
        <div className="control-section spreadsheet-control">
          <ButtonComponent onClick={() => setCount(freezeRowCount + 1)}>
            Increase FrozenRows
          </ButtonComponent>
          <SpreadsheetComponent
            openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
            saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
          >
            <SheetsDirective>
              <SheetDirective
                name="Gross Salary"
                frozenRows={freezeRowCount}
                frozenColumns={2}
                selectedRange="C1"
              >
                <RangesDirective>
                  <RangeDirective dataSource={freezePaneData} startCell="A2" />
                </RangesDirective>
                <RowsDirective>
                  <RowDirective>
                    <CellsDirective>
                      <CellDirective
                        index={1}
                        value="Period"
                        style={cellStyle}
                      />
                      <CellDirective
                        index={3}
                        value="Total Gross Salary"
                        style={cellStyle}
                      />
                    </CellsDirective>
                  </RowDirective>
                  <RowDirective index={26}>
                    <CellsDirective>
                      <CellDirective
                        index={13}
                        value="Total Amount:"
                        style={bold}
                      />
                      <CellDirective formula="=SUM(O4:O26)" style={cellStyle} />
                      <CellDirective formula="=SUM(P4:P26)" style={cellStyle} />
                    </CellsDirective>
                  </RowDirective>
                </RowsDirective>
                <ColumnsDirective>
                  <ColumnDirective width={80} />
                  <ColumnDirective width={80} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={80} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                  <ColumnDirective width={100} />
                </ColumnsDirective>
              </SheetDirective>
            </SheetsDirective>
          </SpreadsheetComponent>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
