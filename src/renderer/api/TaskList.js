import db from '@/database/datastore.js'
/**
 * 存储任务列表
 * @param {Object} data 任务列表对象
 */
export function saveTasklist (data) {
  db.set('dolist', data).write()
}
/**
 * 获取任务列表
 */
export function getTasklist () {
  let data = db.get('dolist').value()
  return data
}
/**
 * 存储已完成任务列表
 * @param {Object} data 任务列表对象
 */
export function saveEndTasklist (data) {
  db.set('undolist', data).write()
}
/**
 * 获取已完成任务列表
 */
export function getEndTasklist () {
  let data = db.get('undolist').value()
  return data
}
