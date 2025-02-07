import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardImage } from '@/types/stage'

import { StoreState } from './store'

const initialState: CardImage = {
  uri: '',
}

export const cardImageSlice = createSlice({
  name: 'CARD_IMAGE',
  initialState,
  reducers: {
    setUri(state, action: PayloadAction<string>) {
      state.uri = action.payload
    },

    clearUri(state) {
      state.uri = ''
    },
  },
})

export const cardImageReducer = cardImageSlice.reducer
export const cardImageAction = cardImageSlice.actions

export const getCardImageUri = (state: StoreState) => state.cardImage.uri
