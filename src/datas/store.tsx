import { configureStore, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import * as React from 'react'

type db = {key : number, title : string, content : string, date : string}
interface diaryDB {contents: [], loading : boolean}
// const [diaries, setDiaries] = React.useState<db>({
// 	key : 0, title : '', content : '', date : ''})

// axios.get('http://localhost:3002/exDB').then((result) => {
// 	setDiaries(result.data[0])
// })
const initialDiary : diaryDB = {
	contents : [],
	loading : false,
}

export const importDiary = createAsyncThunk<[]>('/exDB', async () => {
	const response = await axios.get('http://localhost:3002/exDB')
	return response.data
	
})

// const user1 = {user : 'bae'}
const user2 = {user : 'Bae Moon Gue'}

const diarySlice = createSlice({
	name : 'diaries',
	initialState : initialDiary,
	reducers: {

	},
	extraReducers : (builder) => {
		builder
			.addCase(importDiary.pending, (state) => {
				state.loading = true;
				console.log('loading')
			})
			.addCase(importDiary.fulfilled, (state, action) => {
				state.loading = false;
				state.contents = action.payload
				console.log('payload', state.contents)
			})
			.addCase(importDiary.rejected, (state) => {
				state.loading = false;
				console.log('error')
			})
	}
	
})

// const userSlice = createSlice({
//   name : 'firstname',
//   initialState : user1,
// 	reducers: {
// 		changeName(state) {
// 			return {user : state.user + 'moon gyu'}
// 		},
// 		changeName2() {
// 			return {user : user1.user}
// 		}
// 	}
// })

const userSlice2 = createSlice({
	name : 'Bae',
	initialState : user2,
	reducers: {

	}
})

export let store = configureStore({
  reducer: {
    // newUser : userSlice.reducer,
		diaryOwner : userSlice2.reducer,
		diaryContent : diarySlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// export let {changeName, changeName2} = userSlice.actions