// Load reusable header
fetch("components/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
  });

// Load reusable footer
fetch("components/footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;

    // Set dynamic year AFTER footer is inserted
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });


// WhatsApp Quote Sender
function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;

  const services = [];
  document.querySelectorAll("input[type=checkbox]:checked").forEach(cb => {
    services.push(cb.value);
  });

  if (!name || !location || services.length === 0) {
    alert("Please enter your name, location, and select at least one service.");
    return;
  }

  const message = `
Hello, I'd like to request a cleaning quote.

Name: ${name}
Location: ${location}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided"}

Preferred Date: ${date || "Not specified"}

Services:
${services.map(s => "- " + s).join("\n")}

Notes: ${notes || "None"}
  `;

  const url = "https://wa.me/27780785043?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
