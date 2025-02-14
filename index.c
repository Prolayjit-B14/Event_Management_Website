<!DOCTYPE html>
< lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seamless Event Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<section class="bg-gray-900 text-white">
    <!-- Navbar -->
    <nav class="bg-gray-800 p-4 fixed w-full top-0 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">Event Management</h1>
            <ul class="flex space-x-6">
                <li><a href="#home" class="hover:text-blue-400">Home</a></li>
                <li><a href="#events" class="hover:text-blue-400">Events</a></li>
                <li><a href="#leaderboard" class="hover:text-blue-400">Leaderboard</a></li>
                <li><a href="#profile" class="hover:text-blue-400">Profile</a></li>
                <li><a href="#gallery" class="hover:text-blue-400">Gallery</a></li>
                <li><a href="#forum" class="hover:text-blue-400">Forum</a></li>
                <li><a href="#tracking" class="hover:text-blue-400">Tracking</a></li>
                <li><a href="#judging" class="hover:text-blue-400">Judging</a></li>
                <li><a href="#certificates" class="hover:text-blue-400">Certificates</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- Enhanced Features with Animations -->
    <script>
        document.querySelectorAll(".hover:scale-105").forEach(item => {
            item.addEventListener("mouseover", () => item.classList.add("scale-110"));
            item.addEventListener("mouseout", () => item.classList.remove("scale-110"));
        });
    </script>
</section>

    <!-- Hero Section -->
    <section id="home" class="h-screen flex flex-col justify-center items-center text-center p-8 fade-in">
        <h1 class="text-5xl font-extrabold">Seamless Event Management</h1>
        <p class="text-lg mt-4">Effortlessly manage and participate in coding contests & hackathons</p>
        <a href="#events" class="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-full text-black">Get Started</a>
    </section>
    
    <!-- Profile Section -->
    <section id="profile" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">User Profile</h2>
        <div class="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="profile-pic.png" alt="User Avatar" class="w-24 h-24 rounded-full border-4 border-yellow-500 mb-4">
            <h3 class="text-xl font-semibold">John Doe</h3>
            <p class="text-gray-400">john.doe@example.com</p>
            <p class="mt-2">Participation: 5 Events | Wins: 2</p>
            <div class="mt-4 flex space-x-4">
                <a href="#edit-profile" class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105">Edit Profile</a>
                <a href="#settings" class="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105">Settings</a>
            </div>
        </div>
    </section>

    <!-- Dashboard Section -->
    <section id="dashboard" class="h-screen flex flex-col justify-center items-center text-center p-8 fade-in">
        <h1 class="text-5xl font-extrabold">Dashboard</h1>
        <p class="text-lg mt-4">Get a quick overview of ongoing and upcoming events</p>
        <div class="mt-6 grid grid-cols-2 gap-6 w-2/3">
            <div class="bg-blue-600 p-6 rounded-lg shadow-lg">Live Events: <span class="font-bold">2</span></div>
            <div class="bg-purple-600 p-6 rounded-lg shadow-lg">Participants: <span class="font-bold">250+</span></div>
            <div class="bg-green-600 p-6 rounded-lg shadow-lg">Upcoming Events: <span class="font-bold">3</span></div>
            <div class="bg-yellow-600 p-6 rounded-lg shadow-lg">Certificates Issued: <span class="font-bold">500+</span></div>
        </div>
    </section>

    <!-- Key Features -->
    <section id="features" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Key Features</h2>
        <div class="grid grid-cols-3 gap-6 mt-6">
            <div class="p-4 bg-gray-800 rounded-lg">Live Leaderboard</div>
            <div class="p-4 bg-gray-800 rounded-lg">Automated Certificates</div>
            <div class="p-4 bg-gray-800 rounded-lg">Real-Time Updates</div>
        </div>
    </section>

    <section id="tracking" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Live Event Tracking</h2>
        <p class="mt-4">Stay updated with real-time event progress and notifications.</p>
        <div class="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
            <h3 class="text-xl font-semibold">Current Event: Hackathon 2025</h3>
            <p class="mt-2">Status: <span class="text-green-400">Ongoing</span></p>
            <p>Participants: 150 | Time Left: 2 hours</p>
        </div>
    </section>
    
    <!-- Upcoming Events -->
    <section id="events" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Upcoming Events</h2>
        <ul class="mt-4">
            <li class="bg-gray-700 p-4 rounded-lg mt-2">Hackathon 2025 - March 20</li>
            <li class="bg-gray-700 p-4 rounded-lg mt-2">Code Challenge - April 15</li>
        </ul>
    </section>

    <!-- Leaderboard -->
    <section id="leaderboard" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Leaderboard</h2>
        <table class="w-full mt-4 bg-gray-800 rounded-lg">
            <tr class="border-b border-gray-600">
                <th>Rank</th><th>Name</th><th>Score</th>
            </tr>
            <tr><td>1</td><td>Alice</td><td>95</td></tr>
            <tr><td>2</td><td>Bob</td><td>90</td></tr>
        </table>
    </section>

    <!-- Judging System -->
    <section id="judging" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Judging System</h2>
        <p class="mt-4">Automatic and manual judging system to ensure fair scoring.</p>
        <div class="mt-6 grid grid-cols-2 gap-6">
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold">Automated Scoring</h3>
                <p class="mt-2">Using AI-based assessment for accuracy and efficiency.</p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold">Manual Evaluation</h3>
                <p class="mt-2">Expert judges will provide final scores and feedback.</p>
            </div>
        </div>
    </section>
    
    <!-- Media Gallery -->
    <section id="gallery" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Gallery</h2>
        <input type="file" class="mt-4 p-2 bg-gray-700 rounded-lg">
    </section>

    <!-- Blog Section -->
    <section id="blog" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Event Blog</h2>
        <p class="mt-4">Latest updates and event highlights</p>
        <article class="bg-gray-700 p-4 rounded-lg mt-4">Hackathon Winners Announced!</article>
    </section>

    <!-- Certificates Download -->
    <section id="certificates" class="p-8 text-center fade-in">
        <h2 class="text-3xl font-bold">Certificates & Rewards</h2>
        <p class="mt-4">Download your participation or winner certificates instantly.</p>
        <div class="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="certificate-icon.png" alt="Certificate Icon" class="w-24 mb-4">
            <a href="certificate.pdf" download class="mt-4 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105">Download Your Certificate</a>
            <p class="mt-2 text-sm">Ensure your email is linked to receive personalized certificates.</p>
        </div>
    </section>
    
<!-- Forum Section -->
<section id="forum" class="p-8 text-center fade-in">
    <h2 class="text-3xl font-bold">Community Forum</h2>
    <div class="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <div class="mb-4">
            <input type="text" placeholder="Start a discussion..." class="w-full p-2 rounded-lg text-black">
            <button class="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full font-bold">Post</button>
        </div>
        <div class="text-left">
            <h3 class="text-xl font-semibold">Recent Discussions</h3>
            <ul class="mt-4 space-y-4">
                <li class="bg-gray-700 p-4 rounded-lg">How to improve coding speed? - <span class="text-gray-400">by Jane Doe</span></li>
                <li class="bg-gray-700 p-4 rounded-lg">Best resources for Data Structures - <span class="text-gray-400">by Alex Smith</span></li>
                <li class="bg-gray-700 p-4 rounded-lg">Tips for first hackathon - <span class="text-gray-400">by Chris Lee</span></li>
            </ul>
        </div>
    </div>
</section>

    <!-- Footer with Social Media -->
    <footer class="p-6 bg-gray-800 text-center">
        <p>&copy; 2025 Seamless Event Management. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
            <a href="#" class="hover:text-yellow-400">Facebook</a>
            <a href="#" class="hover:text-yellow-400">Twitter</a>
            <a href="#" class="hover:text-yellow-400">LinkedIn</a>
            <a href="#" class="hover:text-yellow-400">Instagram</a>
        </div>
    </footer>
</body>
</html>