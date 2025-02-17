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

    // 🎉 Fixing Event Creation System
    document.querySelector("#event-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        const eventName = document.querySelector("#event-name").value.trim();
        const eventDate = document.querySelector("#event-date").value;
        const eventDesc = document.querySelector("#event-desc").value.trim();
        const eventList = document.getElementById("event-list");

        if (!eventName || !eventDate || !eventDesc) {
            alert("⚠️ Please fill out all fields!");
            return;
        }

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

   document.addEventListener("DOMContentLoaded", () => {
    const editProfileBtn = document.getElementById("edit-profile-btn");
    const editProfileModal = document.getElementById("edit-profile-modal");
    const closeModal = document.getElementById("close-modal");
    const saveProfileBtn = document.getElementById("save-profile-btn");

    // Open modal
    editProfileBtn.addEventListener("click", () => {
        editProfileModal.classList.remove("hidden");
        
        // Pre-fill input fields with current profile data
        document.getElementById("edit-name").value = document.getElementById("profile-name").textContent;
        document.getElementById("edit-username").value = document.getElementById("profile-username").textContent;
        document.getElementById("edit-email").value = document.getElementById("profile-email").textContent;
        document.getElementById("edit-participation").value = document.getElementById("profile-participation").textContent;
        document.getElementById("edit-wins").value = document.getElementById("profile-wins").textContent;
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        editProfileModal.classList.add("hidden");
    });

    // Save changes
    saveProfileBtn.addEventListener("click", () => {
        document.getElementById("profile-name").textContent = document.getElementById("edit-name").value;
        document.getElementById("profile-username").textContent = document.getElementById("edit-username").value;
        document.getElementById("profile-email").textContent = document.getElementById("edit-email").value;
        document.getElementById("profile-participation").textContent = document.getElementById("edit-participation").value;
        document.getElementById("profile-wins").textContent = document.getElementById("edit-wins").value;

        alert("✅ Profile Updated Successfully!");
        editProfileModal.classList.add("hidden");
    });
});


    // 📝 Blog Post Creation System
    document.querySelector("#blog-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        const blogTitle = document.querySelector("#blog-title").value.trim();
        const blogContent = document.querySelector("#blog-content").value.trim();
        const blogList = document.getElementById("blog-list");

        if (!blogTitle || !blogContent) {
            alert("⚠️ Please fill out all fields!");
            return;
        }

        const newBlog = document.createElement("div");
        newBlog.className = "bg-gray-800 p-4 rounded-lg shadow-lg mt-4 fade-in";
        newBlog.innerHTML = `
            <h3 class="text-xl font-bold text-yellow-400">${blogTitle}</h3>
            <p class="mt-2 text-gray-300">${blogContent}</p>
        `;
        blogList.appendChild(newBlog);
        alert("✅ New blog post has been created successfully!");
        this.reset();
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
