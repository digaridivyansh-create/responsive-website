🎓 College Club Event Management Website

A modern, responsive web application designed to help college clubs create, manage, discover, and register for campus events.

The platform provides two major interfaces:

👨‍🎓 Student/User Side — Browse events, search and filter events, view event details, and register.
🛠️ Admin Side — Add, edit, and delete events and manage registered students.

The project is built using HTML, CSS, and JavaScript with browser localStorage for data persistence in the current prototype.

📌 Table of Contents
Project Overview
Problem Statement
Solution
Objectives
Key Features
User Side
Admin Side
Pages
Technology Stack
Project Structure
Application Flow
Data Management
Responsive Design
Installation
Running Locally
Deployment
How to Use
Admin Operations
Registration Workflow
Search and Filter
Design Features
Current Limitations
Future Scope
Security Improvements
Performance
Use Cases
Learning Outcomes
Project Highlights
License
Author
🚀 Project Overview

College students often receive information about club activities through multiple channels such as WhatsApp groups, notice boards, social media, and informal communication.

This can make it difficult for students to:

Discover upcoming events
Find events based on their interests
Get complete event information
Register quickly
Keep track of available opportunities

At the same time, club organizers need a simple way to:

Create events
Update event information
Remove cancelled events
View registrations
Search registered students

This project provides a centralized platform for managing the complete basic event lifecycle.

❗ Problem Statement

College clubs frequently manage events manually.

Common problems include:

Event information is scattered across different platforms.
Students may miss important events.
Searching for a particular event is difficult.
Registration may require separate forms.
Club administrators need to manually maintain registration information.
Updating event information can become inconvenient.
There is no centralized event management interface.
💡 Solution

The College Club Event Management Website provides a centralized platform where students can discover and register for events while administrators can manage events and registrations.

Student workflow
Open Website
     ↓
View Home Page
     ↓
Explore Events
     ↓
Search / Filter
     ↓
Open Event
     ↓
Register
     ↓
Registration Saved
Admin workflow
Open Admin Dashboard
        ↓
Create Event
        ↓
Event Stored
        ↓
Students View Event
        ↓
Students Register
        ↓
Admin Views Registrations
        ↓
Search Registered Students
🎯 Objectives

The main objectives of this project are:

Build a centralized college event platform.
Provide a clean and modern user interface.
Make event discovery simple.
Provide event search and category filtering.
Simplify event registration.
Provide basic event management functionality for administrators.
Allow administrators to view registered students.
Make the application responsive across devices.
Demonstrate frontend development and JavaScript-based data management.
✨ Key Features
👨‍🎓 Student/User Features
Modern homepage
Club introduction
Featured event
Upcoming events
Complete events page
Event cards
Event category badges
Event date and time
Event venue
Event description
Event registration
Search events by name
Filter events by category
Responsive interface
Registration confirmation
🛠️ Admin Features

The admin dashboard provides:

Add new event
Edit existing event
Delete event
View all events
View registered students
Search registrations
Manage event categories
Manage event date and time
Manage event venue
Manage event descriptions
👨‍🎓 Student/User Side

The student interface is designed to make event discovery fast and simple.

Home Page

The homepage contains:

Hero Section

Introduces the platform with a clear call-to-action.

Example:

Where Campus Life Comes Alive.

Students can directly navigate to the events page.

Club Introduction

Explains the purpose of the college club and its activities.

Featured Event

Highlights an important upcoming event.

Upcoming Events

Displays selected upcoming events in card format.

📅 Events Page

The Events page displays all available events.

Each event card contains:

Event name
Category
Date
Time
Venue
Description
Registration button

Example:

--------------------------------
| TECHNICAL                   |
|                            |
| Hackathon 2026             |
|                            |
| 📅 10 October 2026         |
| ⏰ 10:00 AM                |
| 📍 Innovation Lab          |
|                            |
| 24-hour coding challenge   |
|                            |
| [ Register ]               |
--------------------------------
🔎 Search and Filter

Students can search events by name.

For example:

Search:
Hackathon

The application displays events containing the search term.

Students can also filter events by category.

Available categories include:

Technical
Cultural
Sports
Workshop

Example:

Category → Technical

Only technical events are displayed.

📝 Event Registration

Students can register for an event by submitting:

Name
Email
College / Year
Phone Number
Event

After submission, the registration is stored locally and a success message is displayed.

Example workflow:

Click Register
      ↓
Registration Form
      ↓
Enter Details
      ↓
Submit
      ↓
Registration Saved
      ↓
Success Message
🛠️ Admin Side

The Admin Dashboard provides event management functionality.

Add Event

Administrators can create an event using:

Event name
Date
Time
Venue
Category
Description

Example:

Event Name: AI Workshop
Date: 25 October 2026
Time: 11:00 AM
Venue: Seminar Hall
Category: Workshop
Description: Introduction to Artificial Intelligence
✏️ Edit Event

Administrators can modify existing event information.

The administrator can update:

Name
Date
Time
Venue
Category
Description

The updated information immediately replaces the previous event information.

🗑️ Delete Event

Administrators can remove events from the platform.

The event is removed from the event list and homepage data.

👥 Registered Students

The Admin Dashboard displays registered students in a table.

The table contains:

Field	Description
Name	Student's name
Email	Student email
College / Year	College and academic year
Phone	Contact number
Event	Registered event
🔍 Registration Search

Administrators can quickly search registrations using:

Student name
Email
Event name

This helps administrators find a specific registration without manually checking the entire table.

📄 Application Pages

The application currently contains four main pages.

1. index.html

Homepage containing:

Navigation
Hero section
Club introduction
Featured event
Upcoming events
Footer
2. events.html

Events discovery page containing:

All events
Search bar
Category filter
Event cards
Registration buttons
3. register.html

Event registration page containing:

Name
Email
College / Year
Phone number
Event
Submit button
4. admin.html

Administrative dashboard containing:

Event creation form
Event editing
Event deletion
Event management
Registration table
Registration search
🧰 Technology Stack
Frontend
HTML5

Used to create the application structure and pages.

CSS3

Used for:

Layout
Responsive design
Cards
Buttons
Forms
Navigation
Animations
Visual styling
JavaScript

Used for:

Dynamic event rendering
Search
Filtering
Registration
CRUD operations
DOM manipulation
Local storage
Admin dashboard functionality
💾 Data Storage

The current prototype uses:

Browser localStorage

Two main data collections are maintained.

Events
localStorage.getItem("events")
Registrations
localStorage.getItem("registrations")

This allows data to remain available after refreshing the browser.

📁 Project Structure
college-club-events/
│
├── index.html
│
├── events.html
│
├── register.html
│
├── admin.html
│
├── style.css
│
├── script.js
│
└── README.md
🔄 Application Flow
                    COLLEGE CLUB WEBSITE
                            │
             ┌──────────────┴──────────────┐
             │                             │
         STUDENT                         ADMIN
             │                             │
             ↓                             ↓
          Homepage                    Dashboard
             │                             │
             ↓                    ┌────────┼────────┐
         Events Page              │        │        │
             │                    ↓        ↓        ↓
       ┌─────┴─────┐             Add     Edit    Delete
       │           │             Event   Event   Event
    Search       Filter            │        │       │
       │           │               └────────┼───────┘
       └─────┬─────┘                        │
             ↓                              ↓
        Event Card                   Event Management
             │
             ↓
        Registration
             │
             ↓
      Student Details
             │
             ↓
       localStorage
             │
             ↓
       Admin Dashboard
             │
             ↓
       View Registrations
📱 Responsive Design

The application is designed to work across:

Desktop
Laptop
Tablet
Mobile

Responsive behavior includes:

Desktop

Three-column event grid.

Tablet

Two-column event grid.

Mobile

Single-column event cards.

The navigation and forms also adapt to smaller screens.

🎨 UI/UX Design

The interface uses a modern visual style with:

Gradient hero section
Rounded cards
Soft shadows
Modern typography
Category badges
Hover effects
Responsive layouts
Sticky navigation
Focus states for forms
Clean spacing
Mobile-first adjustments

The objective is to make the platform feel like a real campus product rather than a basic college assignment.

⚙️ Installation
Prerequisites

You only need:

A web browser
VS Code or another code editor
Git (optional for deployment)

No Node.js or backend server is required for the current version.
