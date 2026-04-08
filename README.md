# 101477705-lab-test2-comp3133

## Student Info
- Name: Sokmontrey Sythat
- Student ID: 101477705
- Course: COMP3133 - Full Stack Development II
- Lab Test: 2, Version 2b (Harry Potter Theme)
- Submission Date: April 8, 2026

## Project Overview
An Angular 17+ standalone single page application themed around Harry Potter. The app consumes the public Harry Potter REST API to display characters, filter them by Hogwarts house, and view detailed information for any selected character. The interface is built entirely with Angular Material components and uses a custom dark theme.

## Features
- Character List with image, name, and house
- Filter by House dropdown (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
- Character Details page with image, info, and wand details
- Service layer for API calls (HarryPotterService)
- Character interface/model with full typing
- Angular Material UI (mat-toolbar, mat-card, mat-select, mat-list, mat-progress-spinner, etc.)
- GitHub repository for source control
- Hosted deployment on Vercel

## Tech Stack
- Angular 17+ (standalone components, signals)
- Angular Material
- TypeScript
- RxJS
- Harry Potter REST API (https://hp-api.onrender.com)

## API Endpoints Used
1. GET https://hp-api.onrender.com/api/characters
   Purpose: Fetch all Harry Potter characters for the list view.
2. GET https://hp-api.onrender.com/api/characters/house/:house
   Purpose: Fetch characters filtered by Hogwarts house.
3. GET https://hp-api.onrender.com/api/character/:id
   Purpose: Fetch a single character by id for the details view.

## Setup & Run Locally
1. Clone the repository:
   ```
   git clone https://github.com/SokmontreyGBC/101477705-lab-test2-comp3133.git
   ```
2. Install dependencies:
   ```
   cd 101477705-lab-test2-comp3133
   npm install
   ```
3. Start the development server:
   ```
   ng serve
   ```
4. Open the app in your browser at http://localhost:4200

## Folder Structure
```
src/app/
├── app.config.ts
├── app.routes.ts
├── app.ts
├── app.html
├── app.scss
├── models/
│   └── character.interface.ts
├── services/
│   └── harry-potter.service.ts
└── components/
    ├── characterlist/
    │   ├── characterlist.component.ts
    │   └── characterlist.component.html
    ├── characterfilter/
    │   ├── characterfilter.component.ts
    │   └── characterfilter.component.html
    └── characterdetails/
        ├── characterdetails.component.ts
        └── characterdetails.component.html
```

## Screenshots
- Character List
- Filter by House
- Character Details

(Note: screenshots uploaded separately to D2L)

## Live Demo
[Hosted App Link]: https://101477705-lab-test2-comp3133.vercel.app/characters

## GitHub Repository
[GitHub Link]: https://github.com/SokmontreyGBC/101477705-lab-test2-comp3133
