import React from "react";

import FreGroup from "../component/freGroup";
import Table from "../component/table";
import Summary from "../component/summary";

export default function TableView(props){
    return  <div>
                <FreGroup/>
                <div className="data-table">
                    <Table/>
                    <Summary/>
                </div>
            </div>
}