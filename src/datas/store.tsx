import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


const user1 = {user : 'bae'}
const user2 = {user : 'Bae Moon Gue'}

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

const userSlice2 = createSlice({
	name : 'Bae',
	initialState : user2,
	reducers: {

	}
})

export let store = configureStore({
  reducer: {
    newUser : userSlice.reducer,
		diaryOwner : userSlice2.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export let {changeName, changeName2} = userSlice.actions