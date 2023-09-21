import { createAction, props } from "@ngrx/store";


export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");
export const customCrement = createAction("customCrement",props<{value:number, action:string}>());
export const updateName = createAction("updateName",props<{channel:string}>());
