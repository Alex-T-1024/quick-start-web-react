import { useReducer, useCallback, useMemo } from 'react'

// Common State Types
export interface LoadingState {
  isError: boolean
  errorMessage: string | object
  isLoading: boolean
  lastLoaded?: Date
}

const ERROR = 'ERROR'
const LOADING = 'LOADING'
const FINISH = 'FINISH'

function setErrorAction(errorMessage: string | object = ''): ActionType {
  return {
    type: ERROR,
    errorMessage,
  }
}

function setLoadingAction(): ActionType {
  return {
    type: LOADING,
  }
}

function setFinishAction(): ActionType {
  return {
    type: FINISH,
    lastLoaded: new Date(),
  }
}

interface ActionType {
  type: typeof ERROR | typeof LOADING | typeof FINISH
  errorMessage?: string | object
  lastLoaded?: Date
}

function reducer(state: LoadingState, action: ActionType): LoadingState {
  switch (action.type) {
    case ERROR:
      if (
        state.isError !== true ||
        state.errorMessage !== action.errorMessage ||
        state.isLoading !== false
      ) {
        return {
          ...state,
          isError: true,
          errorMessage: action.errorMessage!,
          isLoading: false,
        }
      }
      return state
    case LOADING:
      if (
        state.isError !== false ||
        state.errorMessage !== '' ||
        state.isLoading !== true
      ) {
        return { ...state, isError: false, errorMessage: '', isLoading: true }
      }
      return state
    case FINISH:
      return {
        ...state,
        isError: false,
        errorMessage: '',
        isLoading: false,
        lastLoaded: action.lastLoaded,
      }
    default:
      return state
  }
}

const initialState: LoadingState = {
  isError: false,
  errorMessage: '',
  isLoading: false,
}

export interface LoadingStateHooksType {
  loadingState: LoadingState
  setError: (errorMessage: string) => void
  setLoading: () => void
  setFinish: () => void
}

export default function useLoadingState(): LoadingStateHooksType {
  const [state, dispatch] = useReducer(reducer, initialState)
  const setError = useCallback(
    (errorMessage: string) => dispatch(setErrorAction(errorMessage)),
    [dispatch]
  )
  const setLoading = useCallback(() => dispatch(setLoadingAction()), [dispatch])
  const setFinish = useCallback(() => dispatch(setFinishAction()), [dispatch])

  const loadingStateObj = useMemo<LoadingStateHooksType>(() => {
    return { loadingState: state, setError, setLoading, setFinish }
  }, [setError, setFinish, setLoading, state])

  return loadingStateObj
}
