import * as types from './mutation-types'

export const selectPlay = function ({commit, stste}, {item, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  commit(type.SET_PLAYLIST, list)
  commit(type.SET_CURRENT_INDEX, index)
  commit(type.SET_FULL_SCREEN, true)
  commit(type.SET_PLAYING_STATE, true)

}
