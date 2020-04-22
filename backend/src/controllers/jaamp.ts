import sqlite from 'sqlite-async'
import { dbPath } from '../config/constants'

export const getAllJobs = async () => {
    const db = await sqlite.open(dbPath)

    const sql = `
        SELECT
            J.id AS JobId,
            J.title AS Title,
            J.description AS Description,
            J.dateCreated AS DateCreated,
            J.isActive AS IsActive,
            J.dateRetired AS DateRetired,
            J.lastRefresh AS LastRefresh,
            JT.type AS JobType,
            U.id AS CreatedById,
            U.firstName AS CreatedByFirstName,
            U.lastName AS CreatedByLastName
        FROM Jobs J
        INNER JOIN JobTypes JT
            ON JT.id = J.typeId
        INNER JOIN Users U
            ON U.id = J.createdBy
    `
    console.log("getting all jobs from jaamp.db")

    const jobs = await db.all(sql)

    db.close()

    return jobs
}

export const getAllActiveJobs = async () => {
    const db = await sqlite.open(dbPath)

    const sql = `
        SELECT
            J.id AS JobId,
            J.title AS Title,
            J.description AS Description,
            J.dateCreated AS DateCreated,
            J.lastRefresh AS LastRefresh,
            JT.type AS JobType,
            U.id AS CreatedById,
            U.firstName AS CreatedByFirstName,
            U.lastName AS CreatedByLastName
        FROM Jobs J
        INNER JOIN JobTypes JT
            ON JT.id = J.typeId
        INNER JOIN Users U
            ON U.id = J.createdBy
        WHERE isActive = 1
        ORDER BY title ASC
    `

    console.log("getting all jobs from jaamp.db")
    const jobs = await db.all(sql)

    db.close()

    return jobs
}

export const getAllActiveJobsForUser = async (userId: string) => {
    const db = await sqlite.open(dbPath)

    const sql = `
        SELECT
            J.id AS JobId,
            J.title AS Title,
            J.description AS Description,
            J.dateCreated AS DateCreated,
            J.lastRefresh AS LastRefresh,
            JT.type AS JobType,
            J.createdBy AS CreatedById,
            U.firstName || ' '  || U.lastName AS CreatedBy,
            CASE J.createdBy
                WHEN ? THEN 1
                ELSE 0
            END AS IsJobOwner
        FROM Jobs J
        INNER JOIN JobTypes JT
            ON JT.id = J.typeId
        LEFT JOIN SharedJobs SJ
            ON SJ.jobId = J.id
                AND SJ.userId = ?
        INNER JOIN Users U
            ON U.id = J.createdBy
        WHERE isActive = 1
            AND (
                J.createdBy = ?
                    OR SJ.userId = ?
                )
        ORDER BY title ASC
    `

    console.log("getting all jobs from jaamp.db")
    console.log(sql)

    const jobs = await db.all(sql, [userId, userId, userId, userId])

    db.close()

    return jobs
}

export const getAllActiveJobsByOwner = async (userId: string) => {
    const db = await sqlite.open(dbPath)

    const sql = `
        SELECT
            J.id AS JobId,
            J.title AS Title,
            J.description AS Description,
            J.dateCreated AS DateCreated,
            J.lastRefresh AS LastRefresh,
            JT.type AS JobType,
            U.id AS CreatedById,
            U.firstName AS CreatedByFirstName,
            U.lastName AS CreatedByLastName
        FROM Jobs J
        INNER JOIN JobTypes JT
            ON JT.id = J.typeId
        INNER JOIN Users U
            ON U.id = J.createdBy
                AND U.id = ?
        WHERE isActive = 1
        ORDER BY title ASC
    `

    console.log("getting all jobs from jaamp.db")
    const jobs = await db.all(sql, [userId])

    db.close()

    return jobs
}

export const getAllJobsSharedWithUser = async (userId: string) => {
    const db = await sqlite.open(dbPath)

    const sql = `
        SELECT
            J.id AS JobId,
            J.title AS Title,
            J.description AS Description,
            J.dateCreated AS DateCreated,
            J.lastRefresh AS LastRefresh,
            JT.type AS JobType,
            J.createdBy AS CreatedById,
            OWNER.firstName || ' '  || OWNER.lastName AS CreatedBy
        FROM SharedJobs SJ
        INNER JOIN Users U
            ON U.id = SJ.userId
            AND U.id = ?
        INNER JOIN Jobs J
            ON J.id = SJ.jobId
        INNER JOIN JobTypes JT
            ON JT.id = J.typeId
        INNER JOIN Users OWNER
            ON OWNER.id = J.createdBy
        ORDER BY J.title ASC
    `

    console.log("getting all jobs from jaamp.db")
    console.log(sql)

    const jobs = await db.all(sql, [userId])

    db.close()

    return jobs
}

export const getAllJobsSharedByUser = async (userId: string) => {
    const db = await sqlite.open(dbPath)

    const sql = `
        SELECT
            J.id AS JobId,
            J.title AS Title,
            J.description AS Description,
            J.dateCreated AS DateCreated,
            J.lastRefresh AS LastRefresh,
            JT.type AS JobType,
            J.createdBy AS CreatedById,
            SJ.userId AS SharedWithId,
            SHARED.firstName || ' '  || SHARED.lastName AS SharedWith
        FROM SharedJobs SJ
        INNER JOIN Users U
            ON U.id = SJ.userId
        INNER JOIN Jobs J
            ON J.id = SJ.jobId
                AND J.createdBy = ?
        INNER JOIN JobTypes JT
            ON JT.id = J.typeId
        INNER JOIN Users SHARED
            ON SHARED.id = SJ.userId
        ORDER BY J.title ASC
    `

    console.log("getting all jobs from jaamp.db")
    console.log(sql)

    const jobs = await db.all(sql, [userId])

    db.close()

    return jobs
}
