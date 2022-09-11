import { ITask } from './reducer'

enum ActionType {
  CREATE_NEW_TASK = 'CREATE_NEW_TASK',
  CHECK_TASK = 'CHECK_TASK',
  UNCHECK_TASK = 'UNCHECK_TASK',
  DELETE_TASK = 'DELETE_TASK',
}

function createNewTaskAction(newTask: ITask) {
  return { type: ActionType.CREATE_NEW_TASK, payload: { newTask } }
}

function checkTaskAction(id: string) {
  return { type: ActionType.CHECK_TASK, payload: { id } }
}

function uncheckTaskAction(id: string) {
  return { type: ActionType.UNCHECK_TASK, payload: { id } }
}

function deleteTaskAction(id: string) {
  return { type: ActionType.DELETE_TASK, payload: { id } }
}

export {
  ActionType,
  createNewTaskAction,
  checkTaskAction,
  uncheckTaskAction,
  deleteTaskAction,
}
