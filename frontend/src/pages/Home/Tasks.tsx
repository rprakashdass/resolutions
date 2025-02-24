import { useState } from "react";

const tasks = [

  {
    day: "Day 17 | 21-02-2025",
    tasks: [
      { title: "1. Take your phone and uninstall the apps which have not been used for days and anymore.", isChecked: false, proof: [] },
      { title: "2. Write a thank note for 3 persons who stood with you in your tough times.", isChecked: false, proof: [] },
    ],
  },
    {
    day: "Day 18 | 22-02-2025",
    tasks: [
      { title: "1. Take some time to connect with a friend or loved one.", isChecked: false, proof: [] },
      { title: "2. Write down 3 things you're looking forward to in the coming weeks.", isChecked: false, proof: [] },
    ],
  },
    {
    day: "Day 19 | 23-02-2025",
    tasks: [
      { title: "1. Practice a mindfulness exercise, like focusing on your breath.", isChecked: false, proof: [] },
      { title: "2. Write down 5 things you're thankful for in your life right now.", isChecked: false, proof: [] },
    ],
  },
   {
    day: "Day 20 | 24-02-2025",
    tasks: [
      { title: "1. Take some time to reflect on your self-care journey and how it's impacted your life.", isChecked: false, proof: [] },
      { title: "2. Write down 3 things you're committed to continuing in your self-care routine.", isChecked: false, proof: [] },
    ],
  },

  // {
  //   day: "Day 21 | 25-02-2025",
  //   tasks: [
  //     { title: "1. Celebrate your self-care journey and all that you've accomplished.", isChecked: false, proof: [] },
  //     { title: "2. Write down 5 things you're excited to try or learn in the coming weeks.", isChecked: false, proof: [] },
  //   ],
  // },

  // {
  //   day: "Day 1",
  //   tasks: [
  //     { title: "Move & Breathe - Dedicate 20 minutes today to get your body active, it can be any kind of movement like yoga, medication, stretching, or even light workout.", isChecked: false, proof: [] },
  //     { title: "Fuel your body: Say NO to Junk food today, cut your craving and save your body.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 2",
  //   tasks: [
  //     { title: "Wake up 30 minutes early before your regular wake up time.", isChecked: false, proof: [] },
  //     { title: "Have a SILENT time with yourself without any gadgets.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 3",
  //   tasks: [
  //     { title: "1. Drink minimum of 3 liters of water to stay hydrated.", isChecked: false, proof: [] },
  //     { title: "2. Follow no sugar diet & prioritize high-protein foods.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 4",
  //   tasks: [
  //     { title: "1. Start journaling to track your progress and thoughts.", isChecked: false, proof: [] },
  //     { title: "2. Open setting is your phone, click on Digital Wellbeing and set time for social media apps.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 5",
  //   tasks: [
  //     { title: "1. Take a atleast 5-minute cold shower to boost resilience.", isChecked: false, proof: [] },
  //     { title: "2. Walk 7,000 steps throughout the day.", isChecked: false, proof: [] },
  //   ],
  // },
  //  {
  //   day: "Day 6",
  //   tasks: [
  //     { title: "1. Work without distractions for 40 minutes (no phone, no interruptions).", isChecked: false, proof: [] },
  //     { title: "2. Practice deep breathing exercises for mental clarity.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 7",
  //   tasks: [
  //     { title: "1. Drink at least 3 liters of water to stay hydrated.", isChecked: false, proof: [] },
  //     { title: "2. Do mobility exercises for 15 minutes to improve flexibility.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 8",
  //   tasks: [
  //     { title: "1. Set tough, actionable goals and break them into small steps.", isChecked: false, proof: [] },
  //     { title: "2. Do an outdoor activity (hiking, jogging, cycling).", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 9",
  //   tasks: [
  //     { title: "1. No complaining today – take full responsibility for everything.", isChecked: false, proof: [] },
  //     { title: "2. Strength training (20 min workout focused on bodyweight or weights).", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 10",
  //   tasks: [
  //     { title: "1. Intense workout (Cardio + Breathwork for endurance).", isChecked: false, proof: [] },
  //     { title: "2. Practice gratitude – write 5 things you're grateful for.", isChecked: false, proof: [] },
  //   ],
  // },

  // {
  //   day: "Day 11",
  //   tasks: [
  //     { title: "1. Write down 5 things you're grateful for today.", isChecked: false, proof: [] },
  //     { title: "2. 2. Take 5 deep breaths before bed to calm your mind.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 12",
  //   tasks: [
  //     { title: "1. Drink at least 8 glasses of water throughout the day.", isChecked: false, proof: [] },
  //     { title: "2. Take a 10-minute walk outside during your lunch break.", isChecked: false, proof: [] },
  //   ],
  // },
  // {
  //   day: "Day 13",
  //   tasks: [
  //     { title: "1. Practice a 5-minute morning meditation session.", isChecked: false, proof: [] },
  //     { title: "2. Write down 3 positive affirmations about yourself.", isChecked: false, proof: [] },
  //   ],
  // },
];

const Tasks = () => {
  const [activeDay, setActiveDay] = useState<string | null>(null);

  const handleToggleTasks = (day: string) => {
    setActiveDay((prev) => (prev === day ? null : day));
  };

  return (
    <div className="m-10">
      {tasks.map((dayTask, dayIndex) => (
        <div key={dayIndex} className="mb-6">
          <h1
            className="text-xl font-bold cursor-pointer hover:text-blue-600 shadow-md rounded p-5 bg-[#f3f3f]"
            onClick={() => handleToggleTasks(dayTask.day)}
          >
            {dayTask.day}
          </h1>
          {activeDay === dayTask.day && (
            <ul className="mt-4 space-y-3 pl-4">
              {dayTask.tasks.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="flex items-center gap-4 bg-gray-50 p-3 rounded shadow-sm"
                >
                  <input
                    type="checkbox"
                    defaultChecked={task.isChecked}
                  />
                  <h2>{task.title}</h2>
                  {/* <button className="ml-auto px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Upload your proof (optional)
                  </button> */}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tasks;
