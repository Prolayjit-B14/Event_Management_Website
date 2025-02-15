document.addEventListener("DOMContentLoaded", () => {
    // 🌍 Smooth Scrolling for Navbar
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = anchor.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // 📰 Simulating Live Updates
    const updates = [
        "Round 2 Started - 12:00 PM",
        "Final Round Commences - 2:00 PM",
        "Winners Announced - 4:00 PM"
    ];
    let index = 0;
    setInterval(() => {
        if (index < updates.length) {
            const newUpdate = document.createElement("li");
            newUpdate.className = "bg-gray-700 p-3 rounded fade-in";
            newUpdate.textContent = updates[index++];
            document.getElementById("live-updates").appendChild(newUpdate);
        }
    }, 5000);

    // 🏆 Leaderboard Updates (with animation)
    setInterval(() => {
        document.querySelectorAll("#leaderboard-data tr td:last-child").forEach(score => {
            let newScore = Math.floor(Math.random() * 100) + 1;
            score.textContent = newScore;
            score.classList.add("score-update");
            setTimeout(() => score.classList.remove("score-update"), 500);
        });
    }, 5000);

    // 🎉 Handling Event Creation
    document.querySelector("#event-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const eventName = document.querySelector("#event-name").value.trim();
        const eventDate = document.querySelector("#event-date").value;
        const eventDesc = document.querySelector("#event-desc").value.trim();

        if (eventName === "" || eventDate === "" || eventDesc === "") {
            alert("⚠️ Please fill out all fields!");
            return;
        }

        // Display event dynamically
        const eventList = document.getElementById("event-list");
        const newEvent = document.createElement("div");
        newEvent.className = "bg-gray-800 p-4 rounded-lg shadow-lg mt-4 fade-in";
        newEvent.innerHTML = `
            <h3 class="text-xl font-bold text-yellow-400">${eventName}</h3>
            <p class="text-gray-300">${eventDate}</p>
            <p class="mt-2">${eventDesc}</p>
        `;
        eventList.appendChild(newEvent);

        alert("✅ New event has been created successfully!");
        this.reset();
    });

    // 👤 Profile Editing
    document.querySelector("#edit-profile-btn").addEventListener("click", () => {
        document.querySelector("#edit-profile-modal").classList.remove("hidden");
    });

    document.querySelector("#close-modal").addEventListener("click", () => {
        document.querySelector("#edit-profile-modal").classList.add("hidden");
    });

    // 🏅 Judging System Calculation
    document.querySelectorAll(".submit-score").forEach(button => {
        button.addEventListener("click", function () {
            const row = this.closest("tr");
            const scores = row.querySelectorAll(".score-input");
            let total = 0;

            scores.forEach(input => {
                let value = parseInt(input.value) || 0;
                total += value;
            });

            row.querySelector(".total-score").textContent = total;
            row.querySelector(".total-score").classList.add("score-update");
            setTimeout(() => row.querySelector(".total-score").classList.remove("score-update"), 500);
        });
    });
});
