# FAMILY TREE

This is a quick sample site that displays a family tree. The site includes the following pages:

- HOME PAGE: list all the family members of the current user's family tree
- PERSON PAGE: display info about a person. This page will contain links to direct family members (parents, siblings, children, spouse)
- USER PAGE: the account info page of the user, where the user can edit their personal information.

## Getting Started

### Prerequisites

Here is a list of items that are required:

- npm
- MongoDB

### Installation
1) Clone the repo
2) Install dependencies
```
npm install
```
3) Import test data below into MongoDB
4) Launch application
```
node app.js
```
5) Open the application in your browser at [http://localhost:3000](http://localhost:300)

## Project Details

The application has the following directory structure:

```
├── app.js               # Main Entry
├── controllers          # The functions behind the APIs
├── public               # The public directory with client-side code
├── routes               # The endpoint definitions
├── views                # The views rendered by the server to the client (templates)
├── package.json
└── README.md
```

TEST DATA USED:
```
[
    {
        "id": 0,
        "name": "Emelia Moody",
        "born": 1950,
        "spouseId": 1,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2568&q=80"
    },
    {
        "id": 1,
        "name": "Nathanial Stewart",
        "born": 1950,
        "spouseId": 0,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        "id": 2,
        "name": "Harry Moody",
        "born": 1984,
        "parentId1": 0,
        "parentId2": 1,
        "spouseId": 4,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1556647034-7aa9a4ea7437?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        "id": 3,
        "name": "Manuel Moody",
        "born": 1992,
        "parentId1": 0,
        "parentId2": 1,
        "spouseId": 9,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"

    },
    {
        "id": 4,
        "name": "Eleanor Fuentes",
        "born": 1983,
        "spouseId": 2,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        "id": 5,
        "name": "Mario Fuentes",
        "born": 2017,
        "parentId1": 2,
        "parentId2": 4,
        "spouseId": 14,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
        "id": 6,
        "name": "Jeffery Fuentes",
        "born": 2021,
        "parentId1": 2,
        "parentId2": 4,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2568&q=80"
    },
    {
        "id": 7,
        "name": "Kelly Gorry",
        "born": 2020,
        "spouseId": 2,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"

    },
    {
        "id": 8,
        "name": "Nicole Gorry",
        "born": 2061,
        "parentId1": 2,
        "parentId2": 7,
        "spouseId": 13,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

    },
    {
        "id": 9,
        "name": "Cheryl Alabaster",
        "born": 2001,
        "spouseId": 3,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"
    },
    {
        "id": 10,
        "name": "Jessica Alabaster",
        "born": 2028,
        "parentId1": 3,
        "parentId2": 9,
        "spouseId": 17,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"

    },
    {
        "id": 11,
        "name": "Howard Alabaster",
        "born": 2037,
        "parentId1": 3,
        "parentId2": 9,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        "id": 12,
        "name": "Laura Alabaster",
        "born": 2043,
        "parentId1": 3,
        "parentId2": 9,
        "spouseId": 19,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

    },
    {
        "id": 13,
        "name": "Matthew Montain",
        "born": 2068,
        "spouseId": 8,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"

    },
    {
        "id": 14,
        "name": "Julie Algebra",
        "born": 2022,
        "spouseId": 5,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        "id": 15,
        "name": "Eleanor Algebra",
        "born": 2057,
        "parentId1": 5,
        "parentId2": 14,
        "spouseId": 16,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"

    },
    {
        "id": 16,
        "name": "Glenn Glenn",
        "born": 2052,
        "spouseId": 15,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"

    },
    {
        "id": 17,
        "name": "Juan Dijon",
        "born": 2024,
        "spouseId": 10,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"

    },
    {
        "id": 18,
        "name": "Amy Alabaster",
        "born": 2059,
        "parentId1": 10,
        "parentId2": 17,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

    },
    {
        "id": 19,
        "name": "Curtis Smith",
        "born": 2033,
        "spouseId": 12,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        "id": 20,
        "name": "Allen Alabaster",
        "born": 2081,
        "parentId1": 12,
        "parentId2": 19,
        "hometown": "Boston",
        "avatarSrc": "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

    },
    {
        "id": 21,
        "name": "Eliza Gomez",
        "born": 1947,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"

    },
    {
        "id": 22,
        "name": "Andrew Bowers",
        "born": 1942,
        "spouseId": 21,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2568&q=80"
    },
    {
        "id": 23,
        "name": "Howard Gomez",
        "born": 1985,
        "parentId1": 21,
        "parentId2": 22,
        "spouseId": 25,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

    },
    {
        "id": 24,
        "name": "Joanne Gomez",
        "born": 1989,
        "parentId1": 21,
        "parentId2": 22,
        "spouseId": 26,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

    },
    {
        "id": 25,
        "name": "Rhonda Roundabout",
        "born": 1990,
        "spouseId": 23,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2568&q=80"
    },
    {
        "id": 26,
        "name": "Ryan Five",
        "born": 1989,
        "spouseId": 24,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        "id": 27,
        "name": "Anne Gomez",
        "born": 2029,
        "parentId1": 24,
        "parentId2": 26,
        "spouseId": 30,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"

    },
    {
        "id": 28,
        "name": "Theodore Brown",
        "born": 2020,
        "spouseId": 24,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"

    },
    {
        "id": 29,
        "name": "Gloria Gomez",
        "born": 2054,
        "parentId1": 24,
        "parentId2": 28,
        "spouseId": 31,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        "id": 30,
        "name": "Roger Red",
        "born": 2031,
        "spouseId": 27,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"

    },
    {
        "id": 31,
        "name": "Juan Again",
        "born": 2049,
        "spouseId": 29,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"

    },
    {
        "id": 32,
        "name": "Peter Pastime",
        "born": 2073,
        "spouseId": 29,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1531842477197-54acf89bff98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"
    },
    {
        "id": 33,
        "name": "Chad Gomez",
        "born": 2103,
        "parentId1": 29,
        "parentId2": 32,
        "hometown": "Philadelphia",
        "avatarSrc": "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    }
]
```