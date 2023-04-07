import './DisplayJsonTable.css';
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';
import JsonData from './data.json'

applyPolyfills().then(() => {
    defineCustomElements();
});

function DisplayJsonTable() {
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <>
                    <groupui-table-cell>{info.id}</groupui-table-cell>
                    <groupui-table-cell>{info.name}</groupui-table-cell>
                    <groupui-table-cell>{info.city}</groupui-table-cell>
                    <groupui-table-cell>{info.departement}</groupui-table-cell>
                </>
            )
        }
    )

    return (
        <div>
            <groupui-card elevation="2">
                <groupui-table columns="4" sticky="false" header="true" widths="60px auto auto auto" striped="true">

                    <groupui-table-cell sortable="true">ID</groupui-table-cell>
                    <groupui-table-cell sortable="true">Name</groupui-table-cell>
                    <groupui-table-cell sortable="true">City</groupui-table-cell>
                    <groupui-table-cell sortable="true">Department</groupui-table-cell>

                    {DisplayData}

                </groupui-table>
            </groupui-card>
        </div>
    );
}

export default DisplayJsonTable;
