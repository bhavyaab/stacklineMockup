import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fakeApiCall } from './fakeApi';

//async call for api
export const getMockData = createAsyncThunk(
    'stacklineState/mockData', async () => {
        const data = await fakeApiCall();
        return data;
    }
);


export const stacklineSlice = createSlice({
    name: 'stacklineState',
    initialState,

    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMockData.fulfilled, (state, action) => {
            state.title = action.payload.title;
            state.subtitle = action.payload.subtitle;
            state.image = action.payload.image;
            state.tags = action.payload.tags;
            state.sales = action.payload.sales;
        })
    }
});

export const salesData = (state) => state.stacklineState.sales;
export const productInfo = (state) => {
    return { 
        title: state.stacklineState.title,
        image: state.stacklineState.image,
        subtitle: state.stacklineState.subtitle,
        tags: state.stacklineState.tags
    }

}


// export const {  } = stacklineSlice.actions;

export default stacklineSlice.reducer;