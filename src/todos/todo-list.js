import React, { useEffect, useContext } from "react";
import { todoContext } from "./todo-context";
import { useObserver } from "mobx-react-lite";

export default function TodoList() {
    const todoStore = useContext(todoContext);

    useEffect(() => {
        onLoadTodos();
    }, []);

    const onLoadTodos = async () => {
        await todoStore.getTodos();
    };

    return useObserver(() => (
        <>
            {todoStore.isLoading ? (
                <h1>Loading ...</h1>
            ) : (
                <ul>
                    {todoStore.todos.map(o => (
                        <li key={o.id}>{o.title}</li>
                    ))}
                </ul>
            )}
        </>
    ));
}
