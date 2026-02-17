// 30 Days FULL BODY Workout

const workoutData = [];

// -------- Beginner (Day 1-10) --------
for (let i = 1; i <= 10; i++) {
  workoutData.push({
    level: "Beginner",
    exercises: [
      { name: "Jumping Jacks (Cardio)", sets: 2, reps: 20 + i, img: "jumping-jacks.png" },
      { name: "Push-ups (Chest)", sets: 2, reps: 8 + i, img: "pushups.png" },
      { name: "Bodyweight Squats (Legs)", sets: 2, reps: 12 + i, img: "squats.png" },
      { name: "Lunges (Legs)", sets: 2, reps: 10 + i, img: "lunges.png" },
      { name: "Plank (Core)", sets: 2, reps: (15 + i * 2) + " sec", img: "plank.png" }
    ]
  });
}

// -------- Intermediate (Day 11-20) --------
for (let i = 1; i <= 10; i++) {
  workoutData.push({
    level: "Intermediate",
    exercises: [
      { name: "High Knees (Cardio)", sets: 3, reps: (30 + i * 2) + " sec", img: "mountain.png" },
      { name: "Push-ups", sets: 3, reps: 15 + i, img: "pushups.png" },
      { name: "Jump Squats", sets: 3, reps: 15 + i, img: "squats.png" },
      { name: "Burpees", sets: 2, reps: 8 + i, img: "burpees.png" },
      { name: "Plank", sets: 3, reps: (30 + i * 3) + " sec", img: "plank.png" }
    ]
  });
}

// -------- Advanced (Day 21-30) --------
for (let i = 1; i <= 10; i++) {
  workoutData.push({
    level: "Advanced",
    exercises: [
      { name: "Burpees (Full Body)", sets: 3, reps: 15 + i, img: "burpees.png" },
      { name: "Diamond Push-ups", sets: 3, reps: 18 + i, img: "pushups.png" },
      { name: "Jump Squats", sets: 3, reps: 20 + i, img: "squats.png" },
      { name: "Mountain Climbers", sets: 3, reps: (40 + i * 3) + " sec", img: "mountain.png" },
      { name: "Plank", sets: 3, reps: (45 + i * 4) + " sec", img: "plank.png" }
    ]
  });
}

// Load saved day
let currentDay = localStorage.getItem("day") || 1;
currentDay = parseInt(currentDay);

const levelText = document.getElementById("levelText");
const levelType = document.getElementById("levelType");
const workoutList = document.getElementById("workoutList");
const notification = document.getElementById("notification");

function loadWorkout() {
  let data = workoutData[currentDay - 1];

  levelText.innerText = "Day " + currentDay + " / 30";
  levelType.innerText = data.level + " Full Body";

  workoutList.innerHTML = "";

  data.exercises.forEach(ex => {
    let div = document.createElement("div");
    div.className = "exercise";

    div.innerHTML = `
      <img src="${ex.img}" onerror="this.src='https://via.placeholder.com/60'">
      <div>
        <b>${ex.name}</b><br>
        Sets: ${ex.sets} | Reps: ${ex.reps}
      </div>
    `;

    workoutList.appendChild(div);
  });
}

function completeDay() {
  if (currentDay < 30) {
    currentDay++;
    localStorage.setItem("day", currentDay);
    showNotification("🎉 Day " + (currentDay - 1) + " Completed!");
    loadWorkout();
  } else {
    showNotification("🔥 30 Days Full Body Challenge Completed!");
  }
}

function showNotification(msg) {
  notification.innerText = msg;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

loadWorkout();

