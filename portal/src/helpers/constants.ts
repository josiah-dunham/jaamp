
export const db = {
    "Jobs": [
        {
            "id": 1,
            "title": "Software Engineer",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus. In fermentum et sollicitudin ac orci phasellus.",
            "sharedWith": [],
            "departments": [1],
            "type": 1,
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
            "sharedWith": [4],
            "departments": [3],
            "type": 1,
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
            "sharedWith": [],
            "departments": [4],
            "type": 1,
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
            "sharedWith": [4],
            "departments": [5],
            "type": 2,
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
            "sharedWith": [3],
            "departments": [1],
            "type": 3,
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
            "sharedWith": [1, 3],
            "departments": [7],
            "type": 1,
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
            "sharedWith": [],
            "departments": [1],
            "type": 1,
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
            "sharedWith": [],
            "departments": [7],
            "type": 1,
            "dateCreated": "2020-03-15",
            "createdBy": 1,
            "isActive": true,
            "dateRetired": null,
            "lastRefresh": null
        },

    ],
    "Applicants": [],
    "Users": [
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
        },
    ],
    "JobTypes": [
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
        },
    ],
    "Departments": [
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
    ]
}
