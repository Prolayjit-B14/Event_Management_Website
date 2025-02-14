document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navbar
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = anchor.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Simulating Live Updates
    const updates = [
        "Round 2 Started - 12:00 PM",
        "Final Round Commences - 2:00 PM",
        "Winners Announced - 4:00 PM"
    ];
    let index = 0;
    setInterval(() => {
        if (index < updates.length) {
            const newUpdate = document.createElement("li");
            newUpdate.className = "bg-gray-700 p-3 rounded";
            newUpdate.textContent = updates[index++];
            document.getElementById("live-updates").appendChild(newUpdate);
        }
    }, 5000);

    // Simulating Leaderboard Updates
    setInterval(() => {
        document.querySelectorAll("#leaderboard-data tr td:last-child").forEach(score => {
            score.textContent = Math.floor(Math.random() * 100) + 1;
        });
    }, 5000);

    // Handling Event Creation Form
    document.querySelector("#event-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("New event has been created successfully!");
        this.reset();
    });

    // Profile Editing
    document.querySelector("#edit-profile-btn").addEventListener("click", () => {
        document.querySelector("#edit-profile-modal").classList.remove("hidden");
    });
    document.querySelector("#close-modal").addEventListener("click", () => {
        document.querySelector("#edit-profile-modal").classList.add("hidden");
    });

    // Judging System Calculation
    document.querySelectorAll(".submit-score").forEach(button => {
        button.addEventListener("click", function () {
            const row = this.closest("tr");
            const scores = row.querySelectorAll(".score-input");
            let total = 0;
            scores.forEach(input => total += parseInt(input.value) || 0);
            row.querySelector(".total-score").textContent = total;
        });
    });
});
