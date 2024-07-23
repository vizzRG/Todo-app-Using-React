import { createContext,useContext } from "react";

export const TodoContext = createContext(
    {
        id:1,
        todo: "My Todo",
        completed:false,
    }
)

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}