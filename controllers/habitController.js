const habits = require('../data/habits');

exports.addHabit = (req, res) => {
    const { name, dailyGoal } = req.body;
    const newHabit = { id: Date.now(), name, dailyGoal, log: [] };
    habits.push(newHabit);
    res.status(201).json({ message: 'Habit added successfully', habit: newHabit });
};

exports.updateHabit = (req, res) => {
    const { id } = req.params; 
    const habit = habits.find(h => h.id === parseInt(id));

    if (!habit) {
        return res.status(404).json({ message: 'Habit not found' });
    }

    const today = new Date().toLocaleDateString('en-CA');


    if (!habit.log.includes(today)) {
        habit.log.push(today);
    }

    res.json({
        message: 'Habit updated successfully for today',
        habit,
    });
};


exports.getHabits = (req, res) => {
    res.json(habits);
};

exports.getWeeklyReport = (req, res) => {
    const weekData = habits.map(habit => ({
        name: habit.name,
        completion: habit.log.slice(-7)
    }));
    res.json({ weekData });
};
