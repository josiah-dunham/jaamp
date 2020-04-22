import sqlite from 'sqlite-async'
import { dbPath, primedData } from '../config/constants'
import { logr, typeChecks } from './utils'

export const primeData = async () => {
    try {
        await dropAllTables()
        await createAllTables()
        await batchInsertPrimedData()
    }
    catch (err) {
        console.log(err)
    }
}

export const tester = async () => {
    await batchInsertPrimedData()
}

const dropAllTables = async () => {
    const db = await sqlite.open(dbPath)
    const dropAllTablesSQL = getDropAllTablesSQL()
    console.log("dropping all tables...")
    await dropAllTablesSQL.map(async (table) => {
        console.log(table)
        await db.run(table)
    })
    console.log("all tables dropped")
    await db.close()
}

const createAllTables = async () => {
    const db = await sqlite.open(dbPath)
    const createAllTablesSQL = getCreateAllTablesSQL()
    console.log("creating all tables...")
    await createAllTablesSQL.map(async (table) => {
        console.log(table)
        await db.run(table)
    })
    console.log("all tables created")

    await db.close()
}

const getCreateAllTablesSQL = () => ([
    getCreateJobTypesTableSQL(),
    getCreateDepartmentsTableSQL(),
    getCreateUsersTableSQL(),
    getCreateJobsTablesSQL(),
    getCreateSharedJobsTableSQL(),
    getCreateJobDepartmentsTableSQL(),
    getCreateUserDepartmentsTableSQL(),
])

const getDropAllTablesSQL = () => Object.keys(primedData).map(table => `DROP TABLE IF EXISTS ${table};`)

const batchInsertPrimedData = async () => {
    const _data = primedData

    const tables = Object.keys(_data)

    tables.map(async (tableName: string) => {
        const db = await sqlite.open(dbPath)

        const tableData = _data[tableName]
        const tableColumns = tableData.length ? Object.keys(tableData[0]) : []

        let sql = `INSERT INTO ${tableName} (`
        sql += tableColumns.map((column: string) => column).join() + ")"

        // sql += " VALUES " + tableData.map((data) => "(" + tableColumns.map(column => `'${data[column]}'`) + ")").join() + ";"

        sql += " VALUES " + tableData.map((data) => "(" + tableColumns.map(column => {
            const dataToCheck = data[column]
            logr('has value? ' + typeChecks.hasValue(dataToCheck))
            const dataToInsert = !typeChecks.hasValue(dataToCheck)
                ? `''`
                : typeChecks.isNumber(data[column])
                    ? data[column]
                    : typeChecks.isBoolean(data[column])
                        ? !!data[column] ? 1 : 0
                        : typeChecks.isString(data[column])
                            ? `'${data[column]}'`
                            : `'${data[column].toString()}'`
            return dataToInsert
        }) + ")").join() + ";"


        const dbResult = db.run(sql)
        console.log(sql)
        await db.close()
    })
}

const getCreateJobTypesTableSQL = () => `
        CREATE TABLE IF NOT EXISTS JobTypes (
            id INTEGER PRIMARY KEY,
            type TEXT NOT NULL
        );
    `

const getCreateDepartmentsTableSQL = () => `
        CREATE TABLE IF NOT EXISTS Departments (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        );
    `

const getCreateUsersTableSQL = () => `
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            dateCreated TEXT NOT NULL,
            dateDeleted TEXT NOT NULL DEFAULT ''
        );
    `

const getCreateJobsTablesSQL = () => `
        CREATE TABLE IF NOT EXISTS Jobs (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT DEFAULT '',
            typeId INTEGER NOT NULL,
            dateCreated TEXT NOT NULL,
            createdBy INTEGER NOT NULL,
            isActive TEXT NOT NULL DEFAULT 1,
            dateRetired TEXT NOT NULL DEFAULT '',
            lastRefresh TEXT NOT NULL DEFAULT '',
            FOREIGN KEY (typeId)
                REFERENCES JobTypes (id)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
        );
    `
const getCreateSharedJobsTableSQL = () => `
        CREATE TABLE IF NOT EXISTS SharedJobs (
            jobId INTEGER NOT NULL,
            userId INTEGER NOT NULL,
            PRIMARY KEY (jobId, userId),
            FOREIGN KEY (jobId)
                REFERENCES Jobs (id)
                    ON DELETE CASCADE
                    ON UPDATE NO ACTION,
            FOREIGN KEY (userId)
                REFERENCES Users (id)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
        );
    `

const getCreateJobDepartmentsTableSQL = () => `
        CREATE TABLE IF NOT EXISTS JobDepartments (
            jobId INTEGER NOT NULL,
            departmentId INTEGER NOT NULL,
            PRIMARY KEY (jobId, departmentId),
            FOREIGN KEY (jobId)
                REFERENCES Jobs (id)
                    ON DELETE CASCADE
                    ON UPDATE NO ACTION,
            FOREIGN KEY (departmentId)
                REFERENCES Departments (id)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
        );   
    `

const getCreateUserDepartmentsTableSQL = () => `
        CREATE TABLE IF NOT EXISTS UserDepartments (
            userId INTEGER NOT NULL,
            departmentId INTEGER NOT NULL,
            PRIMARY KEY (userId, departmentId),
            FOREIGN KEY (userId)
                REFERENCES Users (id)
                    ON DELETE CASCADE
                    ON UPDATE NO ACTION,
            FOREIGN KEY (departmentId)
                REFERENCES Departments (id)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
        );
    `