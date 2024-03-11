"use client";
import React, { FormEvent, useEffect, useRef } from "react";
import { useTodo } from "./state";

export const ZustandTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todos = useTodo((state) => state.todo);
  const addTodo = useTodo((state) => state.addTodo);
  const toggleDone = useTodo((state) => state.toggoleTodo);
  const removeTodo = useTodo((state) => state.deleteTodo);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    if (inputRef.current?.value) addTodo(inputRef.current.value);
  };
  return (
    <div className="text-white">
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="flex gap-2 ">
                <span>{todo.title}</span>
                <button
                  onClick={toggleDone.bind(null, todo.id)}
                  className="bg-gray-800 px-2 py-1"
                >
                  {!todo.isDone ? "done" : "undone"}
                </button>
                <button onClick={removeTodo.bind(null, todo.id)}>remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          ref={inputRef}
          className="bg-gray-800"
        />
        <button type="submit">insert</button>
      </form>
    </div>
  );
};
