const cron = require('node-cron');
const habits = require('../data/habits');
const WebSocket = require('ws');

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected to WebSocket');
    ws.send('Welcome to the Habit Tracker Reminder Service!');
});

// Cron job to send reminders every minute
cron.schedule('* * * * *', () => {
    const reminders = habits.map(habit => ({
        name: habit.name,
        reminder: `Reminder: Don't forget to complete your habit: ${habit.name}`
    }));

    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(reminders)); // Send reminders
        }
    });

    console.log('Reminders sent at:', new Date().toLocaleTimeString());
});
