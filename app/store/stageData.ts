import { createEntityAdapter, createSlice, PayloadAction, Update } from '@reduxjs/toolkit'

import { StageData } from '@/types/stage'

import { StoreState } from './store'

const stageDataEntity = createEntityAdapter<StageData>({
  sortComparer: (a: StageData, b: StageData) => {
    if (a.attrs.zIndex === b.attrs.zIndex) {
      if ((a.attrs.zIndex || 0) < 0) {
        return (b.attrs.updatedAt || 0) - (a.attrs.updatedAt || 0)
      }

      return (a.attrs.updatedAt || 0) - (b.attrs.updatedAt || 0)
    }

    return (a.attrs.zIndex || 0) - (b.attrs.zIndex || 0)
  },
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const stageDataSlice = createSlice({
  name: 'STAGE',
  initialState: stageDataEntity.setAll(stageDataEntity.getInitialState(), []),
  reducers: {
    addItem(state, action: PayloadAction<StageData>) {
      if (Array.isArray(action.payload)) {
        stageDataEntity.addMany(state, action.payload)
        return
      }

      stageDataEntity.addOne(state, action.payload)
    },
    updateItem(state, action: PayloadAction<StageData | StageData[]>) {
      if (Array.isArray(action.payload)) {
        stageDataEntity.updateMany(
          state,
          action.payload.map((item) => ({
            id: item.id,
            changes: item.attrs,
          })) as ReadonlyArray<Update<StageData, StageData['id']>>,
        )
        return
      }

      stageDataEntity.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      })
    },
    removeItem(state, action: PayloadAction<string>) {
      if (Array.isArray(action.payload)) {
        stageDataEntity.removeMany(state, action.payload)
        return
      }

      stageDataEntity.removeOne(state, action.payload)
    },
    clearItems(state) {
      stageDataEntity.removeAll(state)
    },
  },
})

export const stageDataReducer = stageDataSlice.reducer

export const stageDataSelector = stageDataEntity.getSelectors(
  (state: StoreState) => state.stageData,
)
export const stageDataAction = stageDataSlice.actions
