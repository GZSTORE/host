// Function to check server status and update the display
async function checkServer() {
  try {
    const res = await fetch('https://api.mcstatus.io/v2/status/bedrock/nesmp.skyyshop.my.id:19132');
    const data = await res.json();
    const statusElement = document.getElementById("status");

    if (data.online) {
      statusElement.innerText = `Online: ${data.players.online} / ${data.players.max}`;
      statusElement.style.color = "#00ffe1"; // Green color for online
    } else {
      statusElement.innerText = 'Server Offline';
      statusElement.style.color = "#ff3333"; // Red color for offline
    }
  } catch (error) {
    document.getElementById("status").innerText = 'Gagal memuat status.';
    document.getElementById("status").style.color = "#ff3333"; // Red color for error
  }
}

// Call the server status check initially and then every 60 seconds
checkServer();
setInterval(checkServer, 60000);

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
