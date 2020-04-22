export const PORT = 4000

export const dbPath = `${process.env['HOME']}/data/sqlite/jaamp.db`

export const primedData = {

    JobTypes: [
        {
            "id": 1,
            "type": "full"
        },
        {
            "id": 2,
            "type": "part"
        },
        {
            "id": 3,
            "type": "internship"
        },
        {
            "id": 4,
            "type": "contract"
        }
    ],
    Departments: [
        {
            "id": 1,
            "name": "Development"
        },
        {
            "id": 2,
            "name": "Marketing"
        },
        {
            "id": 3,
            "name": "Office Adminstration"
        },
        {
            "id": 4,
            "name": "Finance"
        },
        {
            "id": 5,
            "name": "Child Care"
        },
        {
            "id": 6,
            "name": "IT"
        },
        {
            "id": 7,
            "name": "General"
        }
    ],
    Users: [
        {
            "id": 1,
            "firstName": "Josiah",
            "lastName": "Dunham",
            "dateCreated": "2020-02-20"
        },
        {
            "id": 2,
            "firstName": "Kate",
            "lastName": "Dunham",
            "dateCreated": "2020-02-27"
        },
        {
            "id": 3,
            "firstName": "Jason",
            "lastName": "Poblete",
            "dateCreated": "2020-03-07"
        },
        {
            "id": 4,
            "firstName": "Megan",
            "lastName": "Curley",
            "dateCreated": "2020-03-02"
        },
        {
            "id": 5,
            "firstName": "Kristina",
            "lastName": "Eikrem",
            "dateCreated": "2020-03-16"
        }
    ],
    Jobs: [
        {
            "id": 1,
            "title": "Software Engineer",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus. In fermentum et sollicitudin ac orci phasellus.",
            "typeId": 1,
            "dateCreated": "2020-03-15",
            "createdBy": 1,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },
        {
            "id": 2,
            "title": "Office Administrator Assistant",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Magna sit amet purus gravida quis blandit turpis cursus.",
            "typeId": 1,
            "dateCreated": "2020-03-05",
            "createdBy": 2,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },
        {
            "id": 3,
            "title": "Accountant",
            "description": "",
            "typeId": 1,
            "dateCreated": "2020-03-15",
            "createdBy": 3,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },
        {
            "id": 4,
            "title": "Child Care Classroom Assistant",
            "description": "",
            "typeId": 2,
            "dateCreated": "2020-03-15",
            "createdBy": 5,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },
        {
            "id": 5,
            "title": "Summer Marketing Intern",
            "description": "",
            "typeId": 3,
            "dateCreated": "2020-03-15",
            "createdBy": 2,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },
        {
            "id": 6,
            "title": "Management Trainee",
            "description": "",
            "typeId": 1,
            "dateCreated": "2020-03-15",
            "createdBy": 2,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },
        {
            "id": 7,
            "title": "Junior Engineer",
            "description": "",
            "typeId": 1,
            "dateCreated": "2020-03-15",
            "createdBy": 1,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },
        {
            "id": 8,
            "title": "Helpdesk Technician II",
            "description": "",
            "typeId": 1,
            "dateCreated": "2020-03-15",
            "createdBy": 1,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        }
    ],
    SharedJobs: [
        {
            "jobId": 2,
            "userId": 4
        },
        {
            "jobId": 4,
            "userId": 4
        },
        {
            "jobId": 5,
            "userId": 3
        },
        {
            "jobId": 6,
            "userId": 1
        },
        {
            "jobId": 6,
            "userId": 3
        },
    ],
    JobDepartments: [
        {
            "jobId": 1,
            "departmentId": 1
        },
        {
            "jobId": 2,
            "departmentId": 3
        },
        {
            "jobId": 3,
            "departmentId": 4
        },
        {
            "jobId": 4,
            "departmentId": 5
        },
        {
            "jobId": 5,
            "departmentId": 2
        },
        {
            "jobId": 6,
            "departmentId": 7
        },
        {
            "jobId": 7,
            "departmentId": 1
        },
        {
            "jobId": 8,
            "departmentId": 6
        },
    ],
    UserDepartments: [
        {
            "userId": 1,
            "departmentId": 1
        },
        {
            "userId": 1,
            "departmentId": 6
        },
        {
            "userId": 2,
            "departmentId": 2
        },
        {
            "userId": 3,
            "departmentId": 4
        },
        {
            "userId": 4,
            "departmentId": 3
        },
        {
            "userId": 5,
            "departmentId": 5
        },
    ]
}