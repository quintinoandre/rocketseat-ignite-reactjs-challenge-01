import { produce } from 'immer'

import { ActionType } from './actions'

interface ITask {
  id: string
  title: string
  done: boolean
  deadline: Date
  createdAt: Date
  userId: string
}

interface IStateProps {
  tasks: ITask[]
}

interface IPayloadProps {
  newTask?: ITask
  id?: string
}

interface IActionProps {
  type: string
  payload: IPayloadProps
}

function tasksReducer(state: IStateProps, action: IActionProps) {
  switch (action.type) {
    case ActionType.CREATE_NEW_TASK:
      return produce(state, (draft) => {
        draft.tasks.push(action.payload.newTask!)
      })
    case ActionType.CHECK_TASK: {
      const taskIndex = state.tasks.findIndex(
        ({ id }) => id === action.payload.id,
      )

      if (taskIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.tasks[taskIndex].done = true
      })
    }
    case ActionType.UNCHECK_TASK: {
      const taskIndex = state.tasks.findIndex(
        ({ id }) => id === action.payload.id,
      )

      if (taskIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.tasks[taskIndex].done = false
      })
    }
    case ActionType.DELETE_TASK: {
      const taskIndex = state.tasks.findIndex(
        ({ id }) => id === action.payload.id,
      )

      if (taskIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.tasks.splice(taskIndex, 1)
      })
    }
    default:
      return state
  }
}

export type { ITask }
export { tasksReducer }
