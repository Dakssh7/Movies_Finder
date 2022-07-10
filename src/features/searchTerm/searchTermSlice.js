import { createSlice} from "@reduxjs/toolkit";
import { fetchProducts } from './searchTermSlice';

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState : '',
  reducers: {
        setSearchTerm (state, action) {
           return state = action.payload;
        } 
    }  
});

export const {setSearchTerm} = searchTermSlice.actions;
export default searchTermSlice.reducer;