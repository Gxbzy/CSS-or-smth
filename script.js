// script.js

// Function to change background color
document.getElementById('colorChangeBtn').addEventListener('click', function() {
    const colors = ['#004400', '#322e2d', '#eea4bb', '#6b3f0d', '#7db9e7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Function to populate the tour dates
const tourDates = [
    { date: "July 15, 2024", venue: "Madison Square Garden", location: "New York, NY" },
    { date: "August 1, 2024", venue: "Hollywood Bowl", location: "Los Angeles, CA" },
    { date: "September 10, 2024", venue: "Coachella", location: "Indio, CA" },
    { date: "October 5, 2024", venue: "Barclays Center", location: "Brooklyn, NY" }
];

function populateTourDates() {
    const tableBody = document.getElementById('tour-table').getElementsByTagName('tbody')[0];
    tourDates.forEach(function(tour) {
        const row = tableBody.insertRow();
        const dateCell = row.insertCell(0);
        const venueCell = row.insertCell(1);
        const locationCell = row.insertCell(2);
        dateCell.textContent = tour.date;
        venueCell.textContent = tour.venue;
        locationCell.textContent = tour.location;
    });
}

// Populate tour dates on page load
window.onload = function() {
    populateTourDates();
};

document.getElementById('fan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const favoriteRapper = document.getElementById('favorite-rapper').value;
    const message = document.getElementById('message').value;

    // For now, just log the data to the console (you can replace this with actual form submission)
    console.log('Form Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Favorite Rapper:', favoriteRapper);
    console.log('Message:', message);

    // Show a success message or reset the form
    alert('Thank you for joining the community!');
    this.reset();  // Resets the form
});

// Function to open the selected tab
function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }
  
    // Get all elements with class="tab-item" and remove the "active" class
    let tabItems = document.getElementsByClassName("tab-item");
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].classList.remove("active");
    }
  
    // Show the current tab content and add "active" class to the clicked tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  // Set default tab to be open on page load (optional)
  document.addEventListener("DOMContentLoaded", function() {
    // You can change the default tab here (e.g., "info")
    openTab(event, 'info');
  });
  