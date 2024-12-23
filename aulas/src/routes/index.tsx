import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

export const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<h1>Olá</h1>}/>
            </Switch>
        </BrowserRouter>
    )
}