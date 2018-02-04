import * as constants from '@constants/locale'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.LOCALE_SWITCHED:
      return action.locale
  }
  return state
}
