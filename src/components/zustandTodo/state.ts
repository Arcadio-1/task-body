"use client";
import { create } from "zustand";

type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export const useTodo = create<{
  todo: Todo[] | [];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggoleTodo: (id: string) => void;
}>((set) => ({
  todo: [],
  addTodo: (title) =>
    set((state) => ({
      todo: [
        ...state.todo,
        {
          id: (Math.random() * new Date().getTime()).toString(),
          isDone: false,
          title: title,
        },
      ],
    })),
  deleteTodo: (id) =>
    set((state) => ({ todo: state.todo.filter((item) => item.id !== id) })),
  toggoleTodo: (id) =>
    set((state) => ({
      todo: state.todo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    })),
}));

export const useMenuOpen = create<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));

export const useCart = create<{
  cart: number;
  addToCart: () => void;
}>((set) => ({
  cart: 0,
  addToCart: () => set((s) => ({ cart: s.cart + 1 })),
}));

export const useTesting = create<{
  test: string;
  changeTest: (str: string) => void;
}>((set) => ({
  test: "hi",
  changeTest: (str) => set((rt) => ({ test: rt.test + str })),
}));

export const useanyThing = create<{
  anyThing: string[];
  addString: (str: string) => void;
}>((set) => ({
  anyThing: ["hi man", "hi women"],
  addString: (str) => set((state) => ({ anyThing: [...state.anyThing, str] })),
}));

export const useRatanaObg = create<{
  ratanaObj: { name: string; age: number };
  setRatanaObj: (str: { name: string; age: number }) => void;
}>((set) => ({
  ratanaObj: { name: "rkdo", age: 27 },
  setRatanaObj: (newObg) =>
    set((state) => ({
      ratanaObj: {
        name: state.ratanaObj.name + newObg.name,
        age: state.ratanaObj.age + newObg.age,
      },
    })),
}));

/*
zustand Note

1- we export const that work as hook and start with use
export const useSomthing

2- then se assin create alias from zustand to the constant

we have arrow function and we return object with is and it has set parameters

(set)=>({
  propertyName:
  method 
})

and method has this structore 

addString: (str) => set((state) => ({ anyThing: [...state.anyThing, str] })),

*/
