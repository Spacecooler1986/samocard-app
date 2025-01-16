import { configureStore, EntityState } from '@reduxjs/toolkit'

import { CardImage, StageData } from '@/types/stage'

import { stageDataReducer } from './stageData'
import { cardImageReducer } from './cardImage'

export type StoreState = {
  stageData: EntityState<StageData, StageData['id']>;
  cardImage: CardImage;
};

export const store = configureStore({
  reducer: {
    stageData: stageDataReducer,
    cardImage: cardImageReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
