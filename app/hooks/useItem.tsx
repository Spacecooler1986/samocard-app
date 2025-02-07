import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StageData } from '@/types/stage'
import { stageDataAction, stageDataSelector } from '@/store/stageData'

export function useItem() {
  const dispatch = useDispatch()
  const stageData = useSelector(stageDataSelector.selectAll)

  const createItem = (newItem: StageData) => {
    dispatch(stageDataAction.addItem(newItem))
  }

  const updateItem = useCallback((id: string, attrsFunc: (attrs?: StageData) => StageData['attrs']) => {
    const targetItem = stageData.find((data) => String(data.id) === id || String(data.attrs.id) === id)

    const updatedObject = {
      ...targetItem ?? {},
      attrs: {
        ...targetItem ? targetItem.attrs : {},
        ...attrsFunc(targetItem),
      },
    } as StageData

    dispatch(stageDataAction.updateItem(updatedObject))
  }, [stageData, dispatch])

  return {
    createItem,
    updateItem,
    stageData,
  }
}
