import React from "react";
import TodoList from "./todos/todo-list";
import { Switch, Route, Redirect } from "react-router";

const Router = () => {
    return (
        <Switch>
            <Route path="/todos" component={TodoList} />

            <Redirect from="/" exact to="/todos" />
        </Switch>
    );
};

export default Router;
