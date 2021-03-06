# Spring boot + Angular 11 (RestfullAPI)
Technologies<br/>
Mandatory<br/>
⦁	H2 Database  ✅ <br/>
⦁	Spring Framework  ✅ <br/>
⦁	Spring Data JPA  ✅ <br/>
⦁	Spring Security  ✅ <br/>
⦁	Build Tool (i.e. Maven)  ✅ <br/>
⦁	REST  ✅ <br/>
⦁	JWT <br/>
⦁	Angular <br/>
⦁	Bootstrap <br/>
⦁	Postman <br/>
# Installation 
- Node v8+ for npm
- Visual Studio Code - Latest Version
- Java 8+
- STS - Oxygen+ - (Embedded Maven From STS)
## Installing Node Js (npm) & Visual Studio Code
- Steps
  - Step 01 - Installing NodeJs and NPM - Node Package Manager
  - Step 02 - Quick Introduction to NPM
  - Step 03 - Installing Visual Studio Code - Front End Java Script Editor
#### Installing Java, STS & Embedded Maven
- Steps
  - 0 - Overview - Installation Java, STS and Maven
  - 1 - Installing Java JDK
  - 2 - Installing STS IDE
  - 3 - Using Embedded Maven in STS
  - 4 - Troubleshooting Java, STS and Maven

##  Details

### Request URLs and Examples

#### Common Headers

```
Origin - http://localhost:4200
Content-Type - application/json
Authorization 
- Bearer *** or
- Basic *****
```
#### Retrieve all todos for a user 

- GET - http://localhost:8080/api/v1/users/Ahmed/todos
#### Retrieve a specific todo

- GET - http://localhost:8080/api/v1/users/Ahmed/todos/1
#### Creating a new todo

- POST to  http://localhost:8080/api/v1/users/Ahmed/todos with BODY of Request given below
#### Updating a new todo

- http://localhost:8080/api/v1/users/Ahmed/todos/1 with BODY of Request given below
#### Delete todo

- DELETE to  http://localhost:8080/api/v1/users/Ahmed/todos/1
### JWT Authenticate

- POST to http://localhost:8080/authenticate
Other URLS
- Refresh - http://localhost:8080/authenticate

## Instructions to run frontend
1- Extract the FRONT-END to youe text editor and just run (ng serve)on port(4200) for angular ((6)) after installing node.js and angualr-cli.<br/>
2- To fully functional project you must run spring boot in background.<br/>
<br/>


