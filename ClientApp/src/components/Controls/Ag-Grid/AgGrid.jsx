import React, { Component } from "react";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import classNames from "classnames";
import styles from "./AgGrid.module.scss";
import "./AgGridTheme.scss";

const autoColumnSizingModes = {
    NONE: "none", // Do not dynamically size the columns.
    GRID: "grid", // Automatically resize columns to fit the grid's width when the grid first renders or resizes.
    CELL: "cell" // Automatically resize all columns to fit their content when the grid first renders.
};

const propTypes = {
    // Ag-Grid props
    animateRows: PropTypes.bool,
    defaultColDef: PropTypes.object,
    domLayout: PropTypes.string,
    enableRangeSelection: PropTypes.bool,
    getContextMenuItems: PropTypes.func,
    onGridReady: PropTypes.func,
    onGridSizeChanged: PropTypes.func,
    popupParent: PropTypes.instanceOf(Element),
    suppressMultiRangeSelection: PropTypes.bool,

    // Custom props
    autoColumnSizingMode: PropTypes.oneOf([autoColumnSizingModes.NONE, autoColumnSizingModes.GRID, autoColumnSizingModes.CELL]),
    extraContextMenuItems: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.shape({
            name: PropTypes.string,
            disabled: PropTypes.bool,
            shortcut: PropTypes.string,
            action: PropTypes.func,
            checked: PropTypes.bool,
            icon: PropTypes.oneOfType([PropTypes.instanceOf(Element), PropTypes.string]),
            subMenu: PropTypes.array, // list of sub menu items of same shape
            cssClasses: PropTypes.string,
            tooltip: PropTypes.string
        }),
        PropTypes.string
    ])),
    className: PropTypes.string
};

const defaultProps = {
    // Ag-Grid props
    animateRows: true,
    defaultColDef: {
        filter: false,
        resizable: true,
        sortable: true
    },
    enableRangeSelection: true,
    popupParent: document.querySelector("body"),
    suppressMultiRangeSelection: true,
    shouldSizeColumnsToFit: true,

    // Custom props
    autoColumnSizingMode: autoColumnSizingModes.GRID
};

class AgGrid extends Component {
    constructor(props) {
        super(props);

        this.onGridSizeChanged = this.onGridSizeChanged.bind(this);
        this.onGridReady = this.onGridReady.bind(this);
    }

    //#region Event Handlers
    onGridReady(params) {
        const { onGridReady, autoColumnSizingMode } = this.props;

        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        if (autoColumnSizingMode === autoColumnSizingModes.GRID) {
            this.onSizeColumnsToFit();
        }
        else if (autoColumnSizingMode === autoColumnSizingModes.CELL) {
            this.onAutoSizeColumns();
        }

        if (onGridReady) {
            onGridReady(params);
        }
    }

    onGridSizeChanged(params) {
        const { onGridSizeChanged, autoColumnSizingMode } = this.props;

        if (autoColumnSizingMode === autoColumnSizingModes.GRID) {
            this.onSizeColumnsToFit();
        }

        if (onGridSizeChanged) {
            onGridSizeChanged(params);
        }
    }

    onSizeColumnsToFit() {
        if (this.gridApi) {
            this.onAutoSizeColumns(); // Ag-Grid's sizeColumnsToFit method essentially manipulates cell widths equally so auto sizing first gives priority to cells with larger content
            this.gridApi.sizeColumnsToFit();
        }
    }

    onAutoSizeColumns() {
        if (this.gridColumnApi) {
            const allColumnIds = this.gridColumnApi.getAllColumns().map((column) => {
                return column.colId;
            });

            this.gridColumnApi.autoSizeColumns(allColumnIds);
        }
    }

    onExportDataAsCSV() {
        this.gridApi.exportDataAsCsv();
    }

    onExportDataAsExcel() {
        this.gridApi.exportDataAsExcel();
    }
    //#endregion

    //#region Helper Methods
    getDefaultContextMenuItems() {
        const { extraContextMenuItems } = this.props;

        let hasGroups = false;

        this.gridApi.forEachNode((node) => {
            if (node.group === true) {
                hasGroups = true;
            }
        });

        const sizeColumnsToFitMenuItem = {
            action: this.onSizeColumnsToFit,
            name: "Resize Columns to Fit Grid"
        };

        const exportMenuItem = {
            name: "Export",
            subMenu: [
                {
                    name: "CSV Export",
                    action: () => { this.onExportDataAsCSV(); }
                },
                {
                    name: "Excel Export (.xlsx)",
                    action: () => { this.onExportDataAsExcel(); }
                }
            ]
        };

        const contextMenuItems = [];

        if (hasGroups) {
            contextMenuItems.push(...[
                "expandAll",
                "contractAll",
                "separator"
            ]);
        }

        contextMenuItems.push(...[
            sizeColumnsToFitMenuItem,
            "autoSizeAll",
            "resetColumns",
            
            "separator",
            "copy",
            "copyWithHeaders",

            "separator",
            exportMenuItem
        ]);

        if (extraContextMenuItems) {
            contextMenuItems.push("separator");
            contextMenuItems.push(...extraContextMenuItems);
        }

        return contextMenuItems;
    }
    //#endregion

    //#region Render Methods
    render() {
        const { animateRows, defaultColDef, domLayout, enableRangeSelection, getContextMenuItems, popupParent, suppressMultiRangeSelection, className, ...others } = this.props;

        const wrapperClasses = classNames(
            "ag-theme-material",
            {
                [styles.normalDOMLayoutWrapper]: domLayout !== "autoHeight",
                [className]: className
            }
        );

        const mergedDefaultColDef = {
            ...defaultProps.defaultColDef,
            ...defaultColDef
        };

        return (
            <div
                className={wrapperClasses}
            >
                <AgGridReact
                    {...others}
                    animateRows={animateRows}
                    defaultColDef={mergedDefaultColDef}
                    enableRangeSelection={enableRangeSelection}
                    getContextMenuItems={((getContextMenuItems) ? getContextMenuItems : this.getDefaultContextMenuItems)}
                    onGridReady={this.onGridReady.bind(this)}
                    onGridSizeChanged={this.onGridSizeChanged}
                    popupParent={popupParent}
                    reactNext={true}
                    suppressMultiRangeSelection={suppressMultiRangeSelection}
                    domLayout={domLayout}
                />
            </div>
        );
    }
    //#endregion
}

AgGrid.propTypes = propTypes;
AgGrid.defaultProps = defaultProps;

export default AgGrid;