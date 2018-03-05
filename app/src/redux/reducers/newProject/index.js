import * as constants from '@constants/newProject'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.CREATING_PROJECT:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        successMessage: null
      }

    case constants.ERROR_CREATING_PROJECT:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'error creating project'
      }

    case constants.SUCCESS_CREATING_PROJECT:
      return {
        ...state,
        isLoading: false,
        successMessage: 'new project created',
        newProjectData: action.data
      }

    case constants.CREATING_PROJECT_UNLOAD:
      return {}

    case constants.CREATE_ANOTHER_PROJECT: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        successMessage: null,
        data: null
      }
    }
  }

  return state
}
