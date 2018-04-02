import React from "react"
import {Route} from "react-router-dom"

import NothingSelected from "./NothingSelected"
import Details from "./Details"
import List from "./List"

const IndexScreen = () => (
    <main>
        <div className="row">
            <List/>
            <Route exact path="/list" component={NothingSelected}/>
            <Route path="/list/:id" component={Details}/>
        </div>
    </main>
)

export default IndexScreen