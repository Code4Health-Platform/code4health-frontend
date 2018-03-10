import * as constants from '@constants/projects'

export default function (state = {}, action) {
  switch (action.type) {
    // Creation
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

    // Deletion
    case constants.DELETING_PROJECT:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        successMessage: null
      }

    case constants.ERROR_DELETING_PROJECT:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'error deleting project'
      }

    case constants.SUCCESS_DELETING_PROJECT:
      return {
        ...state,
        isLoading: false,
        successMessage: 'project deleted'
      }

    // Viewing Project(s)
    case constants.SUCCESS_FETCHING_ALL_PROJECTS:
      return {...state, projects: action.data, isLoading: false, received: action.receivedAt}

    case constants.FETCHING_ALL_PROJECTS:
    case constants.FETCHING_PROJECT:
      return {...state, isLoading: true, shouldRefresh: false}

    case constants.ERROR_FETCHING_ALL_PROJECTS:
    case constants.ERROR_FETCHING_PROJECT_CONFIG:
    case constants.ERROR_FETCHING_PROJECT:
      return {...state, isError: true, isLoading: false, error: action.error}

    case constants.SUCCESS_FETCHING_PROJECT:
      return {...state, isLoading: false, project: action.data}

    case constants.SUCCESS_FETCHING_PROJECT_CONFIG:
      return {...state, isLoading: false, config: action.data}

    // Updated
    case constants.PROJECTS_UPDATED:
      return {...state, shouldRefresh: true}

    // Unloading
    case constants.PROJECTS_UNLOAD:
      return { }
  }

  return state
}
