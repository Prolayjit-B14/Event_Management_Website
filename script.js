document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM Fully Loaded!");

    // 🌍 Smooth Scrolling for Navbar
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = anchor.getAttribute("href").substring(1);
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // 📰 Simulating Live Updates
    const updates = [
        "Round 2 Started - 12:00 PM",
        "Final Round Commences - 2:00 PM",
        "Winners Announced - 4:00 PM"
    ];
    let updateIndex = 0;
    const updateContainer = document.getElementById("live-updates");

    if (updateContainer) {
        setInterval(() => {
            if (updateIndex < updates.length) {
                const newUpdate = document.createElement("li");
                newUpdate.className = "bg-gray-700 p-3 rounded fade-in";
                newUpdate.textContent = updates[updateIndex++];
                updateContainer.appendChild(newUpdate);
            }
        }, 5000);
    }

    // 🏆 Leaderboard Updates (Smooth Score Increase)
    setInterval(() => {
        document.querySelectorAll("#leaderboard-data tr td:last-child").forEach(scoreCell => {
            let currentScore = parseInt(scoreCell.textContent) || 0;
            let newScore = currentScore + Math.floor(Math.random() * 10); // Incrementing instead of randomizing
            scoreCell.textContent = newScore;
            scoreCell.classList.add("score-update");
            setTimeout(() => scoreCell.classList.remove("score-update"), 500);
        });
    }, 5000);

    // 🎉 Event Creation System
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

    // 🗨️ Forum Post Creation
    document.addEventListener("DOMContentLoaded", () => {
        const forumForm = document.getElementById("forum-form");
        const forumInput = document.getElementById("forum-input");
        const forumList = document.getElementById("forum-list");

        forumForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevents page refresh

            const postText = forumInput.value.trim();
            if (postText === "") {
                alert("⚠️ Please enter a discussion topic before posting!");
                return;
            }

        // Create a new forum post element
        const newPost = document.createElement("li");
        newPost.className = "bg-gray-700 p-4 rounded-lg fade-in";
        newPost.innerHTML = `${postText} - <span class="text-gray-400">by Anonymous</span>`;

        // Append post to the forum list
        forumList.prepend(newPost);

        // Clear input field
        forumInput.value = "";

        alert("✅ Your discussion has been posted!");
    });
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

    // 📝 Profile Editing Feature
    const editProfileBtn = document.getElementById("edit-profile-btn");
    const editProfileModal = document.getElementById("edit-profile-modal");
    const closeModal = document.getElementById("close-modal");
    const saveProfileBtn = document.getElementById("save-profile-btn");

    if (editProfileBtn && editProfileModal && closeModal && saveProfileBtn) {
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
    }
});
