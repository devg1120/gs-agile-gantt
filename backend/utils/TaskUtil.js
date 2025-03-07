const path = require('path')
const fs = require('fs')

const db = path.join(process.cwd(), 'db')

class TaskUtil {
    static _tasks = null

    static init() {
        TaskUtil.load()
    }

    static load() {
        TaskUtil._tasks = JSON.parse(
            fs.readFileSync(path.join(db, 'tasks.json'), 'utf8')
        )
    }
    static get() {
        return TaskUtil._tasks
    }
    static set(tasks) {
        TaskUtil._tasks = tasks
    }

    static save(tasks = null) {
        if(tasks) {
            TaskUtil.set(tasks)
        }
        fs.writeFileSync(
            path.join(db, 'tasks.json'),
            //JSON.stringify(TaskUtil._tasks)
            JSON.stringify(TaskUtil._tasks,null,2)
        )
    }
}

module.exports = TaskUtil
