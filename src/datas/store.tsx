import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


const user1 = {user : 'bae'}

const userSlice = createSlice({
  name : 'firstname',
  initialState : user1,
	reducers: {
		changeName(state) {
			return {user : state.user + 'moon gyu'}
		},
		changeName2() {
			return {user : user1.user}
		}
	}
})

export let store = configureStore({
  reducer: {
    newUser : userSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export let {changeName, changeName2} = userSlice.actions