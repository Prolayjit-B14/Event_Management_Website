document.addEventListener("DOMContentLoaded", function () {
    console.log("Dashboard Loaded!");

    document.querySelectorAll(".card a").forEach(link => {
        link.addEventListener("click", () => {
            alert("Navigating to " + link.textContent);
        });
    });
});
