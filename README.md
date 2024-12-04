A lightweight Node.js application to track daily habits, get reminders, and monitor weekly progress. Perfect for building consistency!

**Features**
Add and update habits with daily goals.
Generate weekly progress reports.
Receive real-time habit reminders via WebSocket.

**Setup**
Clone the repo and navigate to the project:
git clone https://github.com/<your-username>/smart-habit-tracker.git
cd smart-habit-tracker

**Install dependencies:**
npm install

**Start the server:**
npm start
Access the API at http://localhost:3000 and WebSocket at ws://localhost:8080.

**API Endpoints**
Add Habit: POST /api/habits
Update Habit: PUT /api/habits/:id
Get All Habits: GET /api/habits
Weekly Report: GET /api/habits/report

**Reminders**
Connect to the WebSocket server (ws://localhost:8080) to receive habit reminders.
