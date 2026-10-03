# BrightPath College — Student Management System

**Student Name:** Michael W
**Student ID:** 260221
**Course:** Full Stack Software Development
**Assignment:** React Student Management Assignment v2

---

## Project Overview

A single-page React application for BrightPath College that lets staff browse
all enrolled students and open a full profile for any one of them. Data is
served by a JSON Server mock REST API. The Add Student form is fully
functional — new students are saved to JSON Server and appear immediately in
the students list.

---

## Technologies Used

* **React 18** (functional components, JSX, hooks)
* **React Router 6** (multi-page navigation, dynamic routes, useParams)
* **Bootstrap 5** (layout, navbar, cards, forms, alerts, spinners)
* **Bootstrap Icons** (footer and hero bullet icons)
* **Vite** (dev server and build tool)
* **JSON Server** (mock REST API, supports GET and POST)
* **fetch()** (native HTTP requests)

---

## How to Install and Run

### Prerequisites
* Node.js (v18 or later recommended)
* npm

### Step 1 — Install dependencies
    npm install

### Step 2 — Start JSON Server (terminal 1)
    npm run server

The API runs at http://localhost:5000/students.

If `npm run server` fails, run directly:

    npx json-server --watch db.json --port 5000

### Step 3 — Start the Vite dev server (terminal 2)
    npm run dev

The app opens at http://localhost:3000.

### Stopping and restarting the API
1. Stop the JSON Server terminal (Ctrl+C).
2. Reload the Students page → you should see a Bootstrap danger alert.
3. Restart JSON Server and click **Try Again** → the list reloads.

---

## Project Structure

    Student_management_System/
    ├── public/images/HeroSection.png
    ├── src/components/   Navbar, Footer, HeroSection, StudentCard,
    │                     LoadingSpinner, ErrorAlert
    ├── src/pages/        Home, Students, StudentDetails, AddStudent,
    │                     About, NotFound
    ├── src/hooks/useFetch.js
    ├── src/config.js
    ├── src/App.jsx
    ├── src/main.jsx
    ├── src/index.css
    ├── db.json
    ├── vite.config.js
    ├── index.html
    ├── package.json
    └── README.md

---

## Features Completed

### Core Requirements
* Bootstrap navbar on every page with active-link highlighting
* Responsive collapse on small screens (no sidebar)
* Home page with hero section, welcome heading and CTA buttons
* Students page fetching all students
* Student cards showing name, email, course, age, gender
* View Details button linking to /students/:id
* List rendered with map() and student.id as the key
* Loading and error states with Bootstrap spinner / alert
* Student Details page reading the ID via useParams()
* Single-student fetch (not the full list)
* All fields displayed in a clean card layout
* Friendly "Student Not Found" page for invalid IDs
* Back to Students link
* About page with developer name and ID
* Custom hook useFetch returning { data, loading, error }
* useFetch used by Students and StudentDetails
* Reusable components: Navbar, Footer, HeroSection, StudentCard,
  LoadingSpinner, ErrorAlert
* API base URL defined once in src/config.js
* All API calls use fetch() with response.ok checks
* Responsive on mobile, tablet and desktop

### Bonus Features
* Working Add Student form (controlled inputs, validation,
  POST to JSON Server, redirect to /students)
* Custom 404 page
* Dark multi-column footer

---

## Design Decisions

**1. What does useFetch accept and return?**
It accepts a URL string and an optional reloadKey number, returning
{ data, loading, error }. When either input changes, the effect re-runs.

**2. How does Students pass data to StudentDetails?**
It uses a Link to /students/:id. StudentDetails reads the ID with
useParams() and fetches only that one student.

**3. What if the API is switched off?**
A Bootstrap danger alert with a Try Again button appears. The button
increments a reloadKey state value, which re-triggers the fetch.

**4. What if the student ID does not exist?**
useFetch detects the 404 and sets error. StudentDetails renders a
"Student Not Found" panel with a link back to the list.

**5. How do you prevent flicker?**
useFetch clears data and sets loading=true at the start of every request.
AbortController cancels in-flight requests on unmount or URL change.

**6. Which parts are repeated?**
Navbar, Footer, HeroSection, StudentCard, LoadingSpinner and ErrorAlert
were extracted into components. Data fetching is centralised in useFetch.

---

## Known Bugs

* JSON Server v1 returns string IDs, older versions return numbers.
  The app treats IDs as opaque values, so both work.
* The Add Student form does not prevent duplicate emails.

---

## Screenshots

All screenshots are stored in the /screenshots folder:

* home.png
* students-desktop.png
* students-mobile.png
* students-loading.png
* students-error.png
* student-details.png
* add-student.png
* about.png
* not-found.png

---

## License

Built as part of a React course assignment at BrightPath College.
