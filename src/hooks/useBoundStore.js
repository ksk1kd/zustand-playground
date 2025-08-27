import { create } from 'zustand'
import { createBearSlice } from './bearSlice'
import { createBearFishSlice } from './createBearFishSlice'
import { createFishSlice } from './fishSlice'

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createBearFishSlice(...a),
}))
