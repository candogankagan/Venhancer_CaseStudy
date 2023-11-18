import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favCharacters: [],
};

const favoriteSlice = createSlice({
  name: 'favoriteCharacter',
  initialState,
  reducers: {
    addFavCharacter: (state, action) => {
      let addFavCharacters = state.favCharacters;
      let checkCharacter = addFavCharacters.find(
        item => item.id == action.payload.id,
      );
      if (!checkCharacter) {
        addFavCharacters.push(action.payload);
      }

      state.favCharacters = addFavCharacters;
    },
    removeFavCharacter: (state, action) => {
      let delFavCharacters = state.favCharacters.filter(
        item => item.id != action.payload,
      );
      state.favCharacters = delFavCharacters;
    },
  },
});

export const {addFavCharacter, removeFavCharacter} = favoriteSlice.actions;

export default favoriteSlice.reducer;
