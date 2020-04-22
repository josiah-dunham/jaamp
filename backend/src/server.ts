import express from 'express'
import { PORT } from './config/constants'

import { getAllJobs, getAllActiveJobs, getAllActiveJobsForUser, getAllActiveJobsByOwner, getAllJobsSharedWithUser, getAllJobsSharedByUser } from './controllers/jaamp'
import { primeData, tester } from './helpers/db'

const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    console.log("Root.")
    res.json({ status: 200, msg: "ok" })
})

app.get("/test", async (req, res) => {
    // await tester()
    res.status(200).json({msg: "No test."})
})

app.get("/prime", async (req, res) => {
    console.log("priming data...")
    try {
        await primeData()
        res.status(200).json({ msg: "ok" })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ err })
    }
})

app.get("/jobs", async (req, res) => {
    console.log("/jobs called!")
    try {
        const jobs = await getAllJobs()
        res.json({ status: 200, msg: "ok", data: jobs })
    }
    catch (err) {
        console.log(err)
        res.json({ status: 500, msg: err.toString() })
    }
})

app.get("/jobs/user/:id", async (req, res) => {
    console.log("/jobs called!")
    try {
        const jobs = await getAllActiveJobsForUser(req.params.id)
        res.json({ status: 200, msg: "ok", data: jobs })
    }
    catch (err) {
        console.log(err)
        res.json({ status: 500, msg: err.toString() })
    }
})

app.get("/jobs/active", async (req, res) => {
    console.log("/jobs called!")
    try {
        const jobs = await getAllActiveJobs()
        res.json({ status: 200, msg: "ok", data: jobs })
    }
    catch (err) {
        console.log(err)
        res.json({ status: 500, msg: err.toString() })
    }
})

app.get("/jobs/owner/:id", async (req, res) => {
    console.log("/jobs called!")
    try {
        const jobs = await getAllActiveJobsByOwner(req.params.id)
        res.json({ status: 200, msg: "ok", data: jobs })
    }
    catch (err) {
        console.log(err)
        res.json({ status: 500, msg: err.toString() })
    }
})

app.get("/jobs/sharedWith/:id", async (req, res) => {
    console.log("/jobs called!")
    try {
        const jobs = await getAllJobsSharedWithUser(req.params.id)
        res.json({ status: 200, msg: "ok", data: jobs })
    }
    catch (err) {
        console.log(err)
        res.json({ status: 500, msg: err.toString() })
    }
})

app.get("/jobs/sharedBy/:id", async (req, res) => {
    console.log("/jobs called!")
    try {
        const jobs = await getAllJobsSharedByUser(req.params.id)
        res.json({ status: 200, msg: "ok", data: jobs })
    }
    catch (err) {
        console.log(err)
        res.json({ status: 500, msg: err.toString() })
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})