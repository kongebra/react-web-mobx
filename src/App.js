import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./router";

import { TodoProvider } from "./todos/todo-context";

export default function App() {
    return (
        <TodoProvider>
            {/* <AnotherProvider> */}
            {/* <ThirdProvider> */}
            <BrowserRouter>
                <div className="App">
                    {/* <NavBar /> */}
                    <Router />
                </div>
            </BrowserRouter>
            {/* </ThirdProvider> */}
            {/* </AnotherProvider> */}
        </TodoProvider>
    );
}
