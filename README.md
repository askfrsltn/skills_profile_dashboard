# Full Stack Developer Skills Profile Dashboad
Project lnk: https://askfrsltn.github.io/skills_profile_dashboard/ 

___
Picture
___


## Content 

Introduction
1. User Experience Design
2. User interface
3. Features
4. Development
5. Testing
6. Version Control
7. Deployment
8. Credits
9. Disclaimers


## Introduction
- This application iwas developed for Interactive front end development module (MS2 IFED) of Code Institue Full Stack development course. 
- It is a web based application for Full web stack developers and sudents. It helps to build and print visually appealing simple 2 pages of individual skills dashbaord using intercative scorecard interface for inputs and donut charts for output. 
- Skills structure was developed based on CodeInstitute course program. Profile assessement includes 2 domains - theoretical and practical. 
Scoring logic was partially developped by myself based on my previous consulting experience in carreer succession planning.

## 1. UX
#### 1.1	Goals
* **Developer Goals**
1. Clarify and build a logic of the skills that Full Stack Development course student will aquire after the course completion.
2. Identify developer skills that still need to be improved, especially from practical usage point of view.
3. Reinforce knowledge of Javascript, especially in the field of working with dashboards and connecting it to interactive visual design.
4. Learn new functionalities in Interactive Front-end such as canvas object and working with local storage.
5. Promote my FSD skills and knowledge in 2 differnet domains - application development and consulting.

* **User Goals**
1. Develop a nice looking personal Skills Profile document for a developer resume (send to email or print to a printer).
2. Clarify full scope of the skills required for Full Stack Developer
3. Identify the areas of expertise that require more attention to improve from practical point of view

#### 1.2	User Stories
This web-site is built for Full Stack Development **Students** and  **Developers** pursuing carreer in this field
* As a **beginner student** I want to undesrtand what I will learn during the course and set up a baseline using an assessment
* As a FSD **student** I want to undesrtand (a) What’s  is the full scope of skills I am dealing with and (b) which skills still need to be reinforced with practice 
* As a **Junior developer** I want to have a simple electronic dashboard with realistic assessement of my practical and theoretical knowledge use it during a job application process
* As a **qualified professional**  I want to understand quickly what assignments I can practically cope with as a developer, and which areas still need to be reinforced

#### 1.3 Strategy Plain
- **Goal** - develop application to help user develop skills profile document with simple and logical visual representation of acquired paractical and theoretical skills acquired during FSD course.

A major purpose of the application to be able to revisit all the elements learnt during FSD course and assess individual ability to apply the knowledge in practice, at work. It gives confidence to an applicant and understanding where to focus next.

#### 1.4 Scope Plain
- **Content** 
    - an app needs to have 3 pages - 1)landing/explanation and login, 2) Scoring Page with summary section 3) Final output preview - dashboard page
    - In order to structure the content correctly Full scope of course 9 modules needs to be analysed and broken down into smaller elements, elements will be used to build a structure of scorecards for Projects and Theory elements (see attachment) assessment
    - Standard Scoring Logic needs to be developed with 3 choices both for projects and for theory. For Theory - this logic needs to be based on level of individual ability to aply certain element in practice (familiar, applied at least once, practiced to the level whee s/he can teach others). For Projects - each project will have a score based on awarded mark (pass, merit or disticntion)
    - A final output - dashboard pages should be visual with maximum 2 pages showing short visual summary of FullStack Developer skills by division on Projects, Theory, show % score for each project and 9 theoretiacl moules.
    - Thoeoretical elements on the final dashboard should also be alternatively grouped by 3 alternative criterea - "Developer Languages", "Frameworks/Liibraries" and "Developer tools"with appropriate grpahical representation.

- **Functionally**: 
    - Functionality of the apliaction has 4 goals - 1) Explain to user the process and the scoring logic; 2) Suggest to a user the accurate scoring choices for Project and Theoretical elements 3) Visualise the progress and the intermediate result during the scoring, and 4) Build 2 pages dashboard.
    - EXPLANATION: an app should have simple Clear Explanation what the application does, scoring process, the 2 page dashboard example and scoring logic for Project and Theory elements
    - INPUTS: an app needs to personalise dashbard therefore there should be a login page with 3 fields  - login, Full Name and an email. That will help to store the information into local storage
    - INPUTS: an app needs to provide simple 3-choice scoring functionaliy that can be  learnt intuitively and correctly applied during scoring process. 
    - OUTPUT: Visual Representation of Theory and Projects overall score should be updated after each scoring choice
    - OUTPUT: Visual Representation of Asessment/Scoring Progress needs to be updated after each scoring choice
    - OUTPUT: Each Scorecard to make a choice needs to have interactive user functionality to demonstrate available scoring choices and indicate the status of scoring on each of the scorecards (Yes/No), so that user is able to immidiately see whether project or theory element is scored or not


#### 1.5 Structure Plain
- The application is focused on functionality, therefore its interactivity has a single purpose of helping user to achieve the goal without obsessive decoration


- Defines how user interact with the product, how system behave when user interact, how it’s organized, prioritized, and how much of it. Structure is split into two components, **Interaction Design** & **Information Architecture**.
**Interaction Design** Given the functional requirements, It defines how user can interact with the product, and how the system behaves in response to the user interactions.
- **Information Architecture** Given the content requirements, It defines the arrangement of content elements, how they are organized, to facilitate human understanding.

- **Good Interaction design**
    - helps people to accomplish their goals.
    - effectively communicates interactivity and functionality(what user can do).
    - informs user about state changes(file has been saved, or any feedback), while they interact.
    - prevents user error or mistakes, like the system asks user to confirm potentially harmful action(i.e. deletion).
**Good Information Architecture**
    - organizes, categorizes, and prioritizes the information based on user needs and business objectives.
    - makes it easy to understand and move through information presented.
    - flexible to accommodate growth and adapt to change.
    - appropriate for the audience.

#### 1.6 Skeleton Plain
#### 1.7 Surface Plain
___

## 2. UI
#### 2.1 Walkthrough
#### 2.2 Flow
#### 2.3 Wireframes
___

## 3.	Features
#### 3.1 Design choices
* Colors
* Fonts
* Typography

#### 3.2 Interactive Features
* **Cards** - unfolding cards to expand showing a) Show hidden elements of each course and b) Show hidden scoring functionality inside each section
* **Scoring Status** for each element (green tickmark or grey minus sign)
* **Cumulative progress** bar for each module and counting percentage during the scoring process.
* **Courses Progress assessment** - when going from module to module it helps to vusally highlight the progress on a module level.
* **Button Arrows** help to direct the user decisions. Making it intuitive.

#### 3.4 Challanges
1. **Print out page preview**
2. **API for google Sheets** - the answers are collected and stored in Google Sheets, so that they can be retrieved later using Name and email address.
3. **API for EMailjs** to send final Print out to the user
3. **Donut Charts** - canvas was used to develop an interactive charts
4. **Summary report customisation** for print out in a dark and a light mode.

___

## 4. Development
#### 4.1 Technologies
#### 4.2 Sources
#### 4.3 Development Logic Steps
1. 4 Planes of UX to develop Wireframes
2. Set up repository and structure of README
3. Develop and Test challenging and interactive features in the library
    * Cards
    * Charts
    * Progress bars
    * Printout page
    * Individual customisation (dark and Light mode)
4. Develop printout pages in HTML and set up modes functionality 
5. Develop a calculation engine for percentages and arrays structure
6. Develop html and css page
    * Home page
    * Assessment page
    * Summary Page
    * Customisation (input fields and Emailjs)
7. Organise JavaScript files for the pages
8. Test all the pages and assessment functionality
9. Peer code review feedback
10. Fix bugs finalise README
11. Deploy

#### 4.4 Problems – Solutions](#problems)
#### 4.5 Features that were not installed](#featurers-pending)
___

## 5. Testing
#### 5.1. HTML validation
#### 5.2. CSS validation
#### 5.3. JS validation
#### 5.4. Other Testing
___

## 6.	Version Control
## 7.	Deployment
## 8.	Credits
## 9.	Disclaimers

___

