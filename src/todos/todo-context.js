import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { getTodos } from "./todo-service";

export const todoContext = createContext();
export const TodoProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        /* observables */
        todos: [],
        todo: {
            id: "",
            title: ""
        },
        isLoading: false,
        error: "",

        /* actions */
        async getTodos() {
            store.isLoading = true;
            try {
                const { data } = await getTodos();
                store.todos = data;
            } catch (e) {
                store.error = e.message;
                alert(store.error);
            } finally {
                store.isLoading = false;
            }
        }
    }));

    return (
        <todoContext.Provider value={store}>{children}</todoContext.Provider>
    );
};
