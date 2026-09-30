let events = JSON.parse(localStorage.getItem("events")) || [
    {
        id: 1,
        title: "Hackathon 2026",
        date: "2026-10-10",
        time: "10:00",
        venue: "Innovation Lab",
        category: "Technical",
        description: "A 24-hour coding and innovation challenge."
    },
    {
        id: 2,
        title: "Annual Cultural Fest",
        date: "2026-10-18",
        time: "17:00",
        venue: "College Auditorium",
        category: "Cultural",
        description: "Music, dance, drama and exciting cultural performances."
    },
    {
        id: 3,
        title: "AI Workshop",
        date: "2026-10-25",
        time: "11:00",
        venue: "Seminar Hall",
        category: "Workshop",
        description: "Learn the fundamentals of Artificial Intelligence."
    }
];

let registrations =
    JSON.parse(localStorage.getItem("registrations")) || [];

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}

function displayEvents() {

    const container = document.getElementById("allEvents");

    if (!container) return;

    const search =
        document.getElementById("searchEvent").value.toLowerCase();

    const category =
        document.getElementById("categoryFilter").value;

    const filtered = events.filter(event => {

        const matchesSearch =
            event.title.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" ||
            event.category === category;

        return matchesSearch && matchesCategory;
    });

    container.innerHTML = "";

    filtered.forEach(event => {

        container.innerHTML += `
            <div class="event-card">

                <span class="category">
                    ${event.category}
                </span>

                <h3>${event.title}</h3>

                <p>📅 ${event.date}</p>

                <p>⏰ ${event.time}</p>

                <p>📍 ${event.venue}</p>

                <p>${event.description}</p>

                <a
                    class="btn"
                    href="register.html?event=${encodeURIComponent(event.title)}">
                    Register
                </a>

            </div>
        `;
    });
}

function displayHomeEvents() {

    const upcoming = document.getElementById("upcomingEvents");

    if (!upcoming) return;

    upcoming.innerHTML = "";

    events.slice(0, 3).forEach(event => {

        upcoming.innerHTML += `
            <div class="event-card">

                <span class="category">
                    ${event.category}
                </span>

                <h3>${event.title}</h3>

                <p>📅 ${event.date}</p>
                <p>⏰ ${event.time}</p>
                <p>📍 ${event.venue}</p>

                <a
                    class="btn"
                    href="register.html?event=${encodeURIComponent(event.title)}">
                    Register
                </a>

            </div>
        `;
    });

    const featured = document.getElementById("featuredEvent");

    if (featured && events.length > 0) {

        const event = events[0];

        featured.innerHTML = `
            <span class="category">${event.category}</span>

            <h2>${event.title}</h2>

            <p>${event.description}</p>

            <p>📅 ${event.date}</p>
            <p>⏰ ${event.time}</p>
            <p>📍 ${event.venue}</p>

            <br>

            <a
                class="btn"
                href="register.html?event=${encodeURIComponent(event.title)}">
                Register Now
            </a>
        `;
    }
}

function saveEvent() {

    const id = document.getElementById("editId").value;

    const event = {
        id: id ? Number(id) : Date.now(),
        title: document.getElementById("eventTitle").value,
        date: document.getElementById("eventDate").value,
        time: document.getElementById("eventTime").value,
        venue: document.getElementById("eventVenue").value,
        category: document.getElementById("eventCategory").value,
        description: document.getElementById("eventDescription").value
    };

    if (id) {

        events = events.map(e =>
            e.id === Number(id) ? event : e
        );

    } else {

        events.push(event);
    }

    saveEvents();

    alert("Event saved successfully!");

    clearEventForm();

    displayAdminEvents();
}

function editEvent(id) {

    const event = events.find(e => e.id === id);

    document.getElementById("editId").value = event.id;
    document.getElementById("eventTitle").value = event.title;
    document.getElementById("eventDate").value = event.date;
    document.getElementById("eventTime").value = event.time;
    document.getElementById("eventVenue").value = event.venue;
    document.getElementById("eventCategory").value = event.category;
    document.getElementById("eventDescription").value =
        event.description;
}

function deleteEvent(id) {

    events = events.filter(event => event.id !== id);

    saveEvents();

    displayAdminEvents();
}

function clearEventForm() {

    document.getElementById("editId").value = "";
    document.getElementById("eventTitle").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventTime").value = "";
    document.getElementById("eventVenue").value = "";
    document.getElementById("eventDescription").value = "";
}

function displayAdminEvents() {

    const container = document.getElementById("adminEvents");

    if (!container) return;

    container.innerHTML = "";

    events.forEach(event => {

        container.innerHTML += `
            <div class="admin-event">

                <h3>${event.title}</h3>

                <p>${event.date} | ${event.time}</p>

                <p>${event.venue}</p>

                <button
                    class="edit-btn"
                    onclick="editEvent(${event.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEvent(${event.id})">
                    Delete
                </button>

            </div>
        `;
    });
}

function registerStudent() {

    const registration = {

        name: document.getElementById("studentName").value,

        email: document.getElementById("studentEmail").value,

        collegeYear:
            document.getElementById("collegeYear").value,

        phone:
            document.getElementById("phone").value,

        event:
            document.getElementById("eventName").value
    };

    registrations.push(registration);

    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );

    document.getElementById("registrationMessage").innerText =
        "Registration successful!";

    document.getElementById("registrationForm").reset();
}

function displayRegistrations() {

    const table =
        document.getElementById("registrationTable");

    if (!table) return;

    const search =
        document.getElementById("registrationSearch")
            .value
            .toLowerCase();

    table.innerHTML = "";

    registrations
        .filter(r =>
            r.name.toLowerCase().includes(search) ||
            r.email.toLowerCase().includes(search) ||
            r.event.toLowerCase().includes(search)
        )
        .forEach(r => {

            table.innerHTML += `
                <tr>
                    <td>${r.name}</td>
                    <td>${r.email}</td>
                    <td>${r.collegeYear}</td>
                    <td>${r.phone}</td>
                    <td>${r.event}</td>
                </tr>
            `;
        });
}

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("allEvents")) {

        displayEvents();

        document
            .getElementById("searchEvent")
            .addEventListener("input", displayEvents);

        document
            .getElementById("categoryFilter")
            .addEventListener("change", displayEvents);
    }

    displayHomeEvents();
    displayAdminEvents();
    displayRegistrations();

    const form =
        document.getElementById("registrationForm");

    if (form) {

        const params =
            new URLSearchParams(window.location.search);

        document.getElementById("eventName").value =
            params.get("event") || "";

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            registerStudent();
        });
    }
});