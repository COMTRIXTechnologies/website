
// COMTRIX Technologies — site interactions and EmailJS contact form

// EmailJS public configuration
const EMAILJS_PUBLIC_KEY = "i4fOVYh5agBqVeUA6";
const EMAILJS_SERVICE_ID = "service_c17wwf7";
const EMAILJS_TEMPLATE_ID = "template_8vuusir";

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. MOBILE NAVIGATION
  // ==========================================

  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector("#primary-nav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isExpanded)
      );

      menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation" : "Close navigation"
      );

      primaryNav.classList.toggle("is-open", !isExpanded);
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }


  // ==========================================
  // 2. SCROLL REVEAL ANIMATIONS
  // ==========================================

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            currentObserver.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

  }


  // ==========================================
  // 3. AUTOMATIC COPYRIGHT YEAR
  // ==========================================

  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // ==========================================
  // 4. EMAILJS CONTACT FORM
  // ==========================================

  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  const submitButton = document.querySelector("#form-submit");

  if (!contactForm || !formStatus || !submitButton) {
    return;
  }


  // Display form messages

  const showStatus = (message, type) => {

    formStatus.textContent = message;

    formStatus.classList.remove(
      "is-success",
      "is-error",
      "is-loading"
    );

    if (type) {
      formStatus.classList.add(`is-${type}`);
    }

  };


  // Check whether EmailJS has loaded

  if (!window.emailjs) {

    showStatus(
      "The contact service could not load. Please refresh the page and try again.",
      "error"
    );

    console.error(
      "EmailJS SDK is not available. Check the EmailJS CDN script in index.html."
    );

    return;
  }


  // Initialize EmailJS

  try {

    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY
    });

  } catch (error) {

    showStatus(
      "The contact service could not be initialized. Please try again later.",
      "error"
    );

    console.error("EmailJS initialization error:", error);

    return;
  }


  // Handle contact form submission

  contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    // Validate form fields

    if (!contactForm.reportValidity()) {
      return;
    }


    // Disable button while sending

    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    showStatus(
      "Sending your message. Please wait...",
      "loading"
    );


    try {

      // Send form data through EmailJS

      // Required EmailJS template variables:
      // {{name}}
      // {{email}}
      // {{topic}}
      // {{message}}

      const response = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactForm
      );


      // Successful response

      console.info(
        "EmailJS success:",
        response.status,
        response.text
      );

      showStatus(
        "Thank you! Your message has been sent successfully to COMTRIX.",
        "success"
      );

      // Clear form after successful submission

      contactForm.reset();

    } catch (error) {

      // Display detailed error for troubleshooting

      console.error("EmailJS send error:", error);

      const detail =
        error && error.text
          ? String(error.text)
          : "Unknown sending error";

      showStatus(
        `Sorry, we couldn't send your message. ${detail}`,
        "error"
      );

    } finally {

      // Restore submit button

      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

    }

  });

});
