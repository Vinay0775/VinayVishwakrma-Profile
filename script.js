const portfolioConfig = {
  email: "hello@vinayvishwakarma.dev",
  socials: {
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    whatsapp: "https://wa.me/910000000000",
  },
};

const LANGUAGE_STORAGE_KEY = "vinay-portfolio-language";

const translations = {
  "meta.title": {
    en: "Vinay Vishwakarma | Premium Web Developer Portfolio",
    hi: "विनय विश्वकर्मा | प्रीमियम वेब डेवलपर पोर्टफोलियो",
  },
  "meta.description": {
    en: "Vinay Vishwakarma is a web developer crafting fast, scalable, and visually polished digital experiences.",
    hi: "विनय विश्वकर्मा एक वेब डेवलपर हैं जो तेज, स्केलेबल और visually polished digital experiences बनाते हैं।",
  },
  "nav.skills": { en: "Skills", hi: "स्किल्स" },
  "nav.projects": { en: "Projects", hi: "प्रोजेक्ट्स" },
  "nav.pricing": { en: "Pricing", hi: "प्राइसिंग" },
  "nav.impact": { en: "Impact", hi: "इम्पैक्ट" },
  "nav.contact": { en: "Contact", hi: "कॉन्टैक्ट" },
  "nav.cta": { en: "Let's Talk", hi: "चलिए बात करें" },
  "hero.eyebrow": {
    en: "Available for freelance, product, and growth-focused builds",
    hi: "फ्रीलांस, प्रोडक्ट और growth-focused builds के लिए उपलब्ध",
  },
  "hero.description": {
    en: "I design and ship digital experiences that feel premium from the first scroll, with clean architecture, thoughtful motion, and mobile-first precision.",
    hi: "मैं ऐसे digital experiences design और ship करता हूँ जो first scroll से premium feel दें, जिनमें clean architecture, thoughtful motion और mobile-first precision हो।",
  },
  "hero.primaryCta": { en: "Let's Talk", hi: "चलिए बात करें" },
  "hero.secondaryCta": { en: "See Featured Work", hi: "फ़ीचर्ड वर्क देखें" },
  "hero.point.speed.label": { en: "Speed", hi: "स्पीड" },
  "hero.point.speed.value": { en: "Launch-ready builds", hi: "लॉन्च-रेडी बिल्ड्स" },
  "hero.point.ux.label": { en: "UX", hi: "यूएक्स" },
  "hero.point.ux.value": { en: "Smooth, meaningful motion", hi: "स्मूद और meaningful motion" },
  "hero.point.mobile.label": { en: "Mobile", hi: "मोबाइल" },
  "hero.point.mobile.value": { en: "Flawless responsive execution", hi: "फ्लॉलेस responsive execution" },
  "hero.panel.status": { en: "Premium UI Pipeline", hi: "प्रीमियम UI पाइपलाइन" },
  "hero.panel.meta": { en: "Responsive by default", hi: "डिफॉल्ट रूप से responsive" },
  "hero.panel.title": { en: "What Vinay brings", hi: "विनय क्या लेकर आते हैं" },
  "hero.panel.item1": { en: "Luxury-grade web presentation", hi: "Luxury-grade web presentation" },
  "hero.panel.item2": { en: "Conversion-minded interaction design", hi: "Conversion-minded interaction design" },
  "hero.panel.item3": { en: "Fast, maintainable front-end systems", hi: "Fast, maintainable front-end systems" },
  "hero.panel.card1": { en: "Focus on clean structure and clarity", hi: "Clean structure और clarity पर फोकस" },
  "hero.panel.card2": { en: "Layouts tuned for every viewport", hi: "हर viewport के लिए tuned layouts" },
  "skills.kicker": { en: "Core Skills", hi: "कोर स्किल्स" },
  "skills.title": {
    en: "Interactive systems, responsive craft, and polished delivery.",
    hi: "Interactive systems, responsive craft और polished delivery.",
  },
  "skills.subtitle": {
    en: "A focused toolkit built around execution quality, performance, and visual clarity.",
    hi: "Execution quality, performance और visual clarity पर built एक focused toolkit.",
  },
  "skills.card1.title": { en: "JavaScript", hi: "JavaScript" },
  "skills.card1.body": {
    en: "Building fast front-end interactions, intuitive UI logic, and smooth motion systems with maintainable code.",
    hi: "Maintainable code के साथ fast front-end interactions, intuitive UI logic और smooth motion systems बनाना।",
  },
  "skills.card2.title": { en: "Git & GitHub", hi: "Git & GitHub" },
  "skills.card2.body": {
    en: "Version-controlled workflows that keep iterations clean, traceable, and collaboration-friendly.",
    hi: "Version-controlled workflows जो iterations को clean, traceable और collaboration-friendly रखते हैं।",
  },
  "skills.card3.title": { en: "Responsive UI Design", hi: "Responsive UI Design" },
  "skills.card3.body": {
    en: "Elegant layouts that scale confidently across mobile, tablet, and desktop without breaking the visual experience.",
    hi: "ऐसे elegant layouts जो mobile, tablet और desktop पर confidently scale करें बिना visual experience तोड़े।",
  },
  "skills.card4.title": { en: "Digital Content / Prompt Engineering", hi: "Digital Content / Prompt Engineering" },
  "skills.card4.body": {
    en: "Structured creative direction for faster ideation, sharper concepts, and more intentional digital output.",
    hi: "Faster ideation, sharper concepts और intentional digital output के लिए structured creative direction।",
  },
  "skills.card5.title": { en: "Performance-First Builds", hi: "Performance-First Builds" },
  "skills.card5.body": {
    en: "Thoughtful front-end decisions that support speed, readability, and a smooth user experience.",
    hi: "ऐसे thoughtful front-end decisions जो speed, readability और smooth user experience को support करें।",
  },
  "skills.card6.title": { en: "Visual Storytelling", hi: "Visual Storytelling" },
  "skills.card6.body": {
    en: "Translating brands, ideas, and campaigns into interfaces that feel cohesive, premium, and high-impact.",
    hi: "Brands, ideas और campaigns को ऐसे interfaces में बदलना जो cohesive, premium और high-impact feel दें।",
  },
  "projects.kicker": { en: "Featured Work / Projects", hi: "फ़ीचर्ड वर्क / प्रोजेक्ट्स" },
  "projects.title": {
    en: "Selected work that blends visual polish with technical precision.",
    hi: "चुना हुआ काम जो visual polish और technical precision को साथ लाता है।",
  },
  "projects.subtitle": {
    en: "Premium glassmorphism case studies with bilingual content, contained image interactions, and responsive layouts that stay flawless on mobile.",
    hi: "Premium glassmorphism case studies जिनमें bilingual content, contained image interactions और responsive layouts हैं जो mobile पर भी flawless रहते हैं।",
  },
  "projects.card1.category": { en: "Luxury Showcase", hi: "लक्ज़री शोकेस" },
  "projects.card2.category": { en: "Interactive Design", hi: "इंटरएक्टिव डिज़ाइन" },
  "projects.card3.category": { en: "Mobile Debugging", hi: "मोबाइल डिबगिंग" },
  "projects.livePreview": { en: "Live Preview", hi: "लाइव प्रीव्यू" },
  "projects.githubRepo": { en: "GitHub Repo", hi: "GitHub Repo" },
  "pricing.kicker": { en: "Pricing Packages", hi: "प्राइसिंग पैकेज" },
  "pricing.title": {
    en: "Transparent Pricing for Your Digital Growth",
    hi: "आपकी Digital Growth के लिए Transparent Pricing",
  },
  "pricing.subtitle": {
    en: "Clear starting points for premium builds, responsive launches, and custom web systems that scale with your business.",
    hi: "Premium builds, responsive launches और custom web systems के लिए clear starting points जो आपके business के साथ scale करें।",
  },
  "pricing.startingAt": { en: "Starting at", hi: "शुरुआत" },
  "pricing.badge": { en: "Recommended", hi: "सुझावित" },
  "pricing.starter.name": { en: "Starter Package", hi: "स्टार्टर पैकेज" },
  "pricing.starter.target": {
    en: "Best for small businesses and single-product launches",
    hi: "छोटे businesses और single-product launches के लिए बेहतरीन",
  },
  "pricing.starter.feature1": { en: "Single Page / Landing Page", hi: "Single Page / Landing Page" },
  "pricing.starter.feature2": { en: "Flawless Mobile Responsive UI", hi: "Flawless Mobile Responsive UI" },
  "pricing.starter.feature3": { en: "Contact Form and WhatsApp Integration", hi: "Contact Form और WhatsApp Integration" },
  "pricing.starter.feature4": { en: "Delivered in 3-5 Days", hi: "3-5 दिनों में डिलीवरी" },
  "pricing.starter.cta": { en: "Get Started", hi: "शुरू करें" },
  "pricing.professional.name": { en: "Professional Package", hi: "प्रोफेशनल पैकेज" },
  "pricing.professional.target": {
    en: "Best for agencies, clinics and real estate",
    hi: "Agencies, clinics और real estate के लिए बेहतरीन",
  },
  "pricing.professional.feature1": { en: "Up to 5-7 Pages", hi: "5-7 पेज तक" },
  "pricing.professional.feature2": { en: "Premium Custom UI/UX Design", hi: "Premium Custom UI/UX Design" },
  "pricing.professional.feature3": { en: "Fast Loading and SEO Ready", hi: "Fast Loading और SEO Ready" },
  "pricing.professional.feature4": { en: "1 Month Free Support", hi: "1 महीने का Free Support" },
  "pricing.professional.cta": { en: "Discuss Project", hi: "प्रोजेक्ट पर बात करें" },
  "pricing.advanced.name": { en: "Advanced Web Apps", hi: "एडवांस्ड वेब ऐप्स" },
  "pricing.advanced.price": { en: "Custom Quote", hi: "कस्टम कोट" },
  "pricing.advanced.target": {
    en: "Best for portals, dashboards and e-commerce",
    hi: "Portals, dashboards और e-commerce के लिए बेहतरीन",
  },
  "pricing.advanced.feature1": { en: "Custom Backend Logic", hi: "Custom Backend Logic" },
  "pricing.advanced.feature2": { en: "Admin Panel and Database", hi: "Admin Panel और Database" },
  "pricing.advanced.feature3": { en: "Payment Gateway Integration", hi: "Payment Gateway Integration" },
  "pricing.advanced.feature4": { en: "Advanced Animations", hi: "Advanced Animations" },
  "pricing.advanced.cta": { en: "Let's Talk", hi: "चलिए बात करें" },
  "pricing.note": {
    en: "Note: Prices shown are baseline estimates. Final cost depends on specific project requirements and complexity.",
    hi: "नोट: दिखाए गए prices baseline estimates हैं। Final cost project requirements और complexity पर निर्भर करेगा।",
  },
  "metrics.kicker": { en: "Execution Metrics", hi: "एक्ज़िक्यूशन मेट्रिक्स" },
  "metrics.title": { en: "Built for speed, clarity, and reliable outcomes.", hi: "Speed, clarity और reliable outcomes के लिए बनाया गया।" },
  "metrics.card1.title": { en: "Fast Delivery", hi: "फास्ट डिलीवरी" },
  "metrics.card1.body": {
    en: "Rapid build cycles for landing pages, responsive interfaces, and visual assets without sacrificing polish.",
    hi: "Landing pages, responsive interfaces और visual assets के लिए rapid build cycles, बिना polish खोए।",
  },
  "metrics.card2.title": { en: "Clean Code", hi: "क्लीन कोड" },
  "metrics.card2.body": {
    en: "Intentional structure, scalable styles, and straightforward front-end logic that stays easy to maintain.",
    hi: "Intentional structure, scalable styles और straightforward front-end logic जो maintain करना आसान रहे।",
  },
  "metrics.card3.title": { en: "High Accuracy Execution", hi: "हाई एक्युरेसी एक्ज़िक्यूशन" },
  "metrics.card3.body": {
    en: "Careful attention to layout, spacing, interaction detail, and brand consistency from concept to final pass.",
    hi: "Concept से final pass तक layout, spacing, interaction detail और brand consistency पर careful attention.",
  },
  "contact.kicker": { en: "Contact", hi: "कॉन्टैक्ट" },
  "contact.title": {
    en: "Let's build something that looks premium and performs even better.",
    hi: "आइए कुछ ऐसा बनाते हैं जो premium दिखे और उससे भी बेहतर perform करे।",
  },
  "contact.subtitle": {
    en: "Share your idea, product, or campaign goal. This form can open directly into email for simple deployment without a custom backend.",
    hi: "अपना idea, product या campaign goal share करें। यह form सीधे email में खुल सकता है, इसलिए custom backend के बिना भी deploy करना आसान है।",
  },
  "contact.card1.label": { en: "Response Style", hi: "रिस्पॉन्स स्टाइल" },
  "contact.card1.value": { en: "Clear, quick, collaborative", hi: "स्पष्ट, तेज और collaborative" },
  "contact.card2.label": { en: "Best Fit", hi: "सबसे उपयुक्त" },
  "contact.card2.value": { en: "Landing pages, UI polish, responsive revamps", hi: "Landing pages, UI polish, responsive revamps" },
  "form.name": { en: "Name", hi: "नाम" },
  "form.email": { en: "Email", hi: "ईमेल" },
  "form.message": { en: "Message", hi: "संदेश" },
  "form.namePlaceholder": { en: "Your name", hi: "आपका नाम" },
  "form.emailPlaceholder": { en: "your@email.com", hi: "aap@email.com" },
  "form.messagePlaceholder": {
    en: "Tell me about your project, timeline, and what a great outcome looks like.",
    hi: "अपने project, timeline और desired outcome के बारे में बताइए।",
  },
  "form.submit": { en: "Send Message", hi: "संदेश भेजें" },
  "form.defaultStatus": {
    en: "This opens your default email app so the site stays deployable without a backend.",
    hi: "यह आपके default email app को खोलेगा, जिससे site बिना backend के भी आसानी से deploy हो सके।",
  },
  "footer.copy": { en: "Crafted for premium digital impact.", hi: "Premium digital impact के लिए तैयार किया गया।" },
  "footer.backToTop": { en: "Back to top", hi: "ऊपर जाएँ" },
};

const packageTemplates = {
  en: {
    starter: [
      "Selected package: Starter Package",
      "Project type:",
      "Business/brand:",
      "Target launch date:",
      "Required sections/features:",
    ].join("\n"),
    professional: [
      "Selected package: Professional Package",
      "Project type:",
      "Business/brand:",
      "Approx. number of pages:",
      "Required sections/features:",
    ].join("\n"),
    advanced: [
      "Selected package: Advanced Web Apps",
      "Project type:",
      "Business/brand:",
      "Required dashboards/workflows:",
      "Backend or payment requirements:",
    ].join("\n"),
  },
  hi: {
    starter: [
      "चुना गया पैकेज: Starter Package",
      "Project type:",
      "Business/brand:",
      "Target launch date:",
      "Required sections/features:",
    ].join("\n"),
    professional: [
      "चुना गया पैकेज: Professional Package",
      "Project type:",
      "Business/brand:",
      "Approx. number of pages:",
      "Required sections/features:",
    ].join("\n"),
    advanced: [
      "चुना गया पैकेज: Advanced Web Apps",
      "Project type:",
      "Business/brand:",
      "Required dashboards/workflows:",
      "Backend or payment requirements:",
    ].join("\n"),
  },
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentLanguage = "en";
let typingIntervalId = null;
let typingTimeoutId = null;
let formToastTimeoutId = null;

document.addEventListener("DOMContentLoaded", () => {
  currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "hi" ? "hi" : "en";

  setContactDetails();
  setYear();
  initLanguageToggle();
  initMobileNav();
  applyLanguage(currentLanguage, { animateHero: !prefersReducedMotion.matches });
  initMagneticButton();
  initCounters();
  initFormToast();
  initFormHandling();
  initPricingActions();
  initMobileCardSliders();
  initProjectSlider();
  initProjectImageFallback();
  initBackToTop();
  initScrollProgress();
  initRevealAnimations();
});

function setContactDetails() {
  document.querySelectorAll("[data-social]").forEach((link) => {
    const key = link.dataset.social;

    if (key && portfolioConfig.socials[key]) {
      link.href = portfolioConfig.socials[key];
    }
  });
}

function setYear() {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function initLanguageToggle() {
  const buttons = [...document.querySelectorAll("[data-lang-option]")];

  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLanguage = button.dataset.langOption;

      if (!selectedLanguage || selectedLanguage === currentLanguage) {
        return;
      }

      applyLanguage(selectedLanguage, { animateHero: false });
    });
  });
}

function initMobileNav() {
  const shell = document.querySelector(".header-shell");
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const mobileQuery = window.matchMedia("(max-width: 820px)");

  if (!shell || !nav || !toggle) {
    return;
  }

  const setNavOpen = (isOpen) => {
    const shouldOpen = Boolean(isOpen) && mobileQuery.matches;
    shell.classList.toggle("is-nav-open", shouldOpen);
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    updateAccessibilityText();
  };

  toggle.addEventListener("click", () => {
    if (!mobileQuery.matches) {
      return;
    }

    setNavOpen(!shell.classList.contains("is-nav-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setNavOpen(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileQuery.matches || !shell.classList.contains("is-nav-open")) {
      return;
    }

    if (shell.contains(event.target)) {
      return;
    }

    setNavOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavOpen(false);
    }
  });

  const handleViewportChange = () => {
    if (!mobileQuery.matches) {
      setNavOpen(false);
    }
  };

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", handleViewportChange);
  } else {
    window.addEventListener("resize", handleViewportChange, { passive: true });
  }

  setNavOpen(false);
}

function applyLanguage(language, options = {}) {
  currentLanguage = language === "hi" ? "hi" : "en";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage === "hi" ? "hi" : "en";
  document.body.dataset.language = currentLanguage;

  updateMetaText();
  updateTranslatedText();
  updateTranslatedPlaceholders();
  updateLanguageToggleState();
  updateAccessibilityText();
  renderTypingLines(Boolean(options.animateHero));
  syncPrefilledMessage();
  syncFormStatus();
  syncFormToast();
  syncSubmitButtonState();
}

function updateMetaText() {
  document.title = getTranslation("meta.title");

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.content = getTranslation("meta.description");
  }
}

function updateTranslatedText() {
  document.querySelectorAll("[data-i18n-key]").forEach((element) => {
    const key = element.dataset.i18nKey;
    const value = getTranslation(key);

    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-en][data-hi]").forEach((element) => {
    if (element.classList.contains("typing-line")) {
      return;
    }

    const value = element.dataset[currentLanguage] || element.dataset.en || "";
    element.textContent = value;
  });
}

function updateTranslatedPlaceholders() {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = getTranslation(key);

    if (value) {
      element.placeholder = value;
    }
  });
}

function updateLanguageToggleState() {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateAccessibilityText() {
  const brand = document.querySelector(".brand");
  const nav = document.querySelector(".site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const headerShell = document.querySelector(".header-shell");
  const topButton = document.getElementById("back-to-top");
  const heroTitle = document.querySelector(".hero-title");

  if (brand) {
    brand.setAttribute(
      "aria-label",
      currentLanguage === "hi" ? "विनय विश्वकर्मा होम" : "Vinay Vishwakarma home"
    );
  }

  if (nav) {
    nav.setAttribute("aria-label", currentLanguage === "hi" ? "मुख्य नेविगेशन" : "Primary");
  }

  if (navToggle) {
    const isOpen = Boolean(headerShell?.classList.contains("is-nav-open"));
    navToggle.setAttribute(
      "aria-label",
      currentLanguage === "hi"
        ? isOpen
          ? "नेविगेशन बंद करें"
          : "नेविगेशन खोलें"
        : isOpen
          ? "Close navigation"
          : "Open navigation"
    );
  }

  if (topButton) {
    topButton.setAttribute("aria-label", getTranslation("footer.backToTop"));
  }

  if (heroTitle) {
    const primary = document.querySelector(".typing-line--primary")?.dataset[currentLanguage] || "";
    const secondary = document.querySelector(".typing-line--secondary")?.dataset[currentLanguage] || "";
    heroTitle.setAttribute("aria-label", `${primary} ${secondary}`.trim());
  }
}

function renderTypingLines(animate) {
  const lines = [...document.querySelectorAll(".typing-line")];

  if (!lines.length) {
    return;
  }

  stopTypingAnimation();

  lines.forEach((line) => {
    line.dataset.text = line.dataset[currentLanguage] || line.dataset.en || "";
    line.textContent = "";
    line.classList.remove("is-complete");
  });

  if (!animate || prefersReducedMotion.matches) {
    lines.forEach((line) => {
      line.textContent = line.dataset.text || "";
      line.classList.add("is-complete");
    });
    return;
  }

  let lineIndex = 0;

  const typeLine = () => {
    const currentLine = lines[lineIndex];

    if (!currentLine) {
      return;
    }

    const text = currentLine.dataset.text || "";
    let charIndex = 0;

    typingIntervalId = window.setInterval(() => {
      currentLine.textContent = text.slice(0, charIndex + 1);
      charIndex += 1;

      if (charIndex >= text.length) {
        window.clearInterval(typingIntervalId);
        typingIntervalId = null;
        currentLine.classList.add("is-complete");
        lineIndex += 1;
        typingTimeoutId = window.setTimeout(typeLine, 220);
      }
    }, lineIndex === 0 ? 54 : 26);
  };

  typeLine();
}

function stopTypingAnimation() {
  if (typingIntervalId) {
    window.clearInterval(typingIntervalId);
    typingIntervalId = null;
  }

  if (typingTimeoutId) {
    window.clearTimeout(typingTimeoutId);
    typingTimeoutId = null;
  }
}

function initMagneticButton() {
  const button = document.querySelector(".magnetic-button");

  if (!button || prefersReducedMotion.matches || !window.matchMedia("(pointer:fine)").matches) {
    return;
  }

  const maxOffset = 14;

  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * maxOffset * 2;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * maxOffset * 2;

    button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
}

function initCounters() {
  const counters = [...document.querySelectorAll("[data-counter]")];

  if (!counters.length) {
    return;
  }

  const startCounter = (counter) => {
    if (counter.dataset.started === "true") {
      return;
    }

    counter.dataset.started = "true";
    const target = Number(counter.dataset.counter || 0);
    const suffix = counter.dataset.suffix || "";

    if (prefersReducedMotion.matches) {
      counter.textContent = `${target}${suffix}`;
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      counter.textContent = `${value}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initFormHandling() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const messageField = document.querySelector('textarea[name="message"]');
  const submitButton = form?.querySelector('button[type="submit"]');

  if (!form || !status || !messageField || !submitButton) {
    return;
  }

  setFormStatus("default");
  setSubmitButtonState("idle");

  messageField.addEventListener("input", () => {
    const selectedPackage = messageField.dataset.prefilledPackage;

    if (!selectedPackage) {
      return;
    }

    if (messageField.value !== getPackageTemplate(selectedPackage)) {
      delete messageField.dataset.prefilledPackage;
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      setFormStatus("validation");
      showFormToast("validation");
      return;
    }

    const formData = new FormData(form);
    const endpoint = form.action;
    const method = (form.method || "POST").toUpperCase();

    form.classList.add("is-submitting");
    submitButton.disabled = true;
    setFormStatus("submitting");
    setSubmitButtonState("submitting");
    showFormToast("submitting");

    try {
      const response = await fetch(endpoint, {
        method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Formspree request failed with status ${response.status}`);
      }

      form.reset();
      delete messageField.dataset.prefilledPackage;
      document.querySelectorAll(".pricing-card").forEach((card) => {
        card.classList.remove("is-selected");
      });
      setFormStatus("success");
      showFormToast("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      showFormToast("error");
    } finally {
      form.classList.remove("is-submitting");
      submitButton.disabled = false;
      setSubmitButtonState("idle");
    }
  });
}

function initPricingActions() {
  const packageTriggers = [...document.querySelectorAll("[data-package-select]")];
  const messageField = document.querySelector('textarea[name="message"]');

  if (!packageTriggers.length || !messageField) {
    return;
  }

  packageTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const selectedPackage = trigger.dataset.packageSelect;

      if (!selectedPackage) {
        return;
      }

      document.querySelectorAll(".pricing-card").forEach((card) => {
        card.classList.remove("is-selected");
      });

      trigger.closest(".pricing-card")?.classList.add("is-selected");
      messageField.value = getPackageTemplate(selectedPackage);
      messageField.dataset.prefilledPackage = selectedPackage;
      setFormStatus("packageSelected", selectedPackage);
    });
  });
}

function initMobileCardSliders() {
  const mobileQuery = window.matchMedia("(max-width: 820px)");
  const sliders = [...document.querySelectorAll("[data-mobile-slider]")].map((track) => {
    const name = track.dataset.mobileSlider;
    const controls = document.querySelector(`[data-mobile-slider-controls="${name}"]`);
    const previousButton = controls?.querySelector('[data-mobile-slider-nav="prev"]');
    const nextButton = controls?.querySelector('[data-mobile-slider-nav="next"]');
    const currentDisplay = controls?.querySelector(`[data-mobile-slider-current="${name}"]`);
    const totalDisplay = controls?.querySelector(`[data-mobile-slider-total="${name}"]`);
    const items = [...track.children].filter((item) =>
      item.classList.contains("skill-card") || item.classList.contains("pricing-card")
    );

    return {
      name,
      track,
      controls,
      previousButton,
      nextButton,
      currentDisplay,
      totalDisplay,
      items,
      index: 0,
    };
  });

  const setSliderIndex = (slider, nextIndex) => {
    if (!slider || !slider.items.length) {
      return;
    }

    slider.index = (nextIndex + slider.items.length) % slider.items.length;

    if (!mobileQuery.matches) {
      slider.track.style.removeProperty("--mobile-slide-index");
      slider.items.forEach((item) => item.removeAttribute("aria-hidden"));
      return;
    }

    slider.track.style.setProperty("--mobile-slide-index", String(slider.index));

    slider.items.forEach((item, itemIndex) => {
      item.setAttribute("aria-hidden", String(itemIndex !== slider.index));
    });

    if (slider.currentDisplay) {
      slider.currentDisplay.textContent = formatSliderCount(slider.index + 1);
    }
  };

  const syncSliders = () => {
    sliders.forEach((slider) => {
      if (!slider.items.length) {
        return;
      }

      if (slider.totalDisplay) {
        slider.totalDisplay.textContent = formatSliderCount(slider.items.length);
      }

      setSliderIndex(slider, slider.index);
    });
  };

  sliders.forEach((slider) => {
    if (!slider.items.length) {
      return;
    }

    slider.previousButton?.addEventListener("click", () => {
      setSliderIndex(slider, slider.index - 1);
    });

    slider.nextButton?.addEventListener("click", () => {
      setSliderIndex(slider, slider.index + 1);
    });

    bindHorizontalSwipe(
      slider.track,
      (direction) => {
        if (!mobileQuery.matches) {
          return;
        }

        setSliderIndex(slider, slider.index + direction);
      },
      () => mobileQuery.matches
    );
  });

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncSliders);
  } else {
    window.addEventListener("resize", syncSliders, { passive: true });
  }

  syncSliders();
}

function formatSliderCount(value) {
  return String(value).padStart(2, "0");
}

function bindHorizontalSwipe(element, onSwipe, shouldHandle) {
  if (!element) {
    return;
  }

  let startX = 0;
  let startY = 0;
  let tracking = false;

  element.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 1) {
        return;
      }

      if (typeof shouldHandle === "function" && !shouldHandle(event)) {
        return;
      }

      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      tracking = true;
    },
    { passive: true }
  );

  element.addEventListener(
    "touchend",
    (event) => {
      if (!tracking) {
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      tracking = false;

      if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      onSwipe(deltaX < 0 ? 1 : -1);
    },
    { passive: true }
  );

  element.addEventListener(
    "touchcancel",
    () => {
      tracking = false;
    },
    { passive: true }
  );
}

function initProjectSlider() {
  const slider = document.querySelector("[data-project-slider]");
  const viewport = slider?.querySelector("[data-project-viewport]");
  const previousButton = slider?.querySelector('[data-project-nav="prev"]');
  const nextButton = slider?.querySelector('[data-project-nav="next"]');
  const currentCounter = slider?.querySelector("[data-project-current]");
  const totalCounter = slider?.querySelector("[data-project-total]");
  const slides = slider ? [...slider.querySelectorAll("[data-project-slide]")] : [];
  const pagers = slider ? [...slider.querySelectorAll("[data-project-pager]")] : [];

  if (!slider || !viewport || !previousButton || !nextButton || !slides.length) {
    return;
  }

  const projectStates = slides.map((slide) => {
    const media = slide.querySelector("[data-project-carousel]");
    const imageSlides = [...slide.querySelectorAll("[data-project-image-slide]")];
    const dots = [...slide.querySelectorAll("[data-project-dot]")];
    const count = slide.querySelector("[data-project-image-count]");
    const state = {
      slide,
      media,
      imageSlides,
      dots,
      count,
      imageIndex: 0,
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        setImageIndex(state, index);
        restartImageAutoplay();
      });
    });

    bindHorizontalSwipe(media, (direction) => {
      stepImage(state, direction);
      restartImageAutoplay();
    });

    if (window.matchMedia("(pointer:fine)").matches && media) {
      media.addEventListener("mouseenter", stopImageAutoplay);
      media.addEventListener("mouseleave", restartImageAutoplay);
    }

    return state;
  });

  let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  let imageAutoplayId = null;

  if (activeIndex < 0) {
    activeIndex = 0;
  }

  if (totalCounter) {
    totalCounter.textContent = formatSliderCount(slides.length);
  }

  function getActiveState() {
    return projectStates[activeIndex];
  }

  function setImageIndex(state, nextIndex) {
    if (!state || !state.imageSlides.length) {
      return;
    }

    const total = state.imageSlides.length;
    state.imageIndex = (nextIndex + total) % total;

    state.imageSlides.forEach((imageSlide, index) => {
      imageSlide.classList.toggle("is-active", index === state.imageIndex);
    });

    state.dots.forEach((dot, index) => {
      const isActive = index === state.imageIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });

    if (state.count) {
      state.count.textContent = `${formatSliderCount(state.imageIndex + 1)} / ${formatSliderCount(total)}`;
    }
  }

  function stepImage(state, direction = 1) {
    setImageIndex(state, state.imageIndex + direction);
  }

  function stopImageAutoplay() {
    if (!imageAutoplayId) {
      return;
    }

    window.clearInterval(imageAutoplayId);
    imageAutoplayId = null;
  }

  function restartImageAutoplay() {
    stopImageAutoplay();

    if (prefersReducedMotion.matches) {
      return;
    }

    const activeState = getActiveState();

    if (!activeState || activeState.imageSlides.length <= 1) {
      return;
    }

    imageAutoplayId = window.setInterval(() => {
      stepImage(activeState, 1);
    }, 3800);
  }

  function setActiveSlide(nextIndex, direction = 1) {
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.classList.toggle("is-prev", !isActive && direction < 0);
      slide.classList.toggle("is-next", !isActive && direction > 0);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    pagers.forEach((pager, index) => {
      const isActive = index === activeIndex;
      pager.classList.toggle("is-active", isActive);
      pager.setAttribute("aria-pressed", String(isActive));
    });

    if (currentCounter) {
      currentCounter.textContent = formatSliderCount(activeIndex + 1);
    }

    const activeState = getActiveState();

    if (activeState) {
      setImageIndex(activeState, activeState.imageIndex);
    }

    restartImageAutoplay();
  }

  previousButton.addEventListener("click", () => {
    setActiveSlide(activeIndex - 1, -1);
  });

  nextButton.addEventListener("click", () => {
    setActiveSlide(activeIndex + 1, 1);
  });

  pagers.forEach((pager, index) => {
    pager.addEventListener("click", () => {
      const direction = index < activeIndex ? -1 : 1;
      setActiveSlide(index, direction);
    });
  });

  bindHorizontalSwipe(
    viewport,
    (direction) => {
      setActiveSlide(activeIndex + direction, direction);
    },
    (event) => !event.target.closest("[data-project-carousel]")
  );

  projectStates.forEach((state) => {
    setImageIndex(state, 0);
  });

  setActiveSlide(activeIndex, 1);
}

function initProjectImageFallback() {
  const projectImages = [...document.querySelectorAll(".project-card__image, .project-media__image")];

  if (!projectImages.length) {
    return;
  }

  projectImages.forEach((image) => {
    if (image.complete && !image.naturalWidth) {
      image.classList.add("is-hidden");
      return;
    }

    image.addEventListener(
      "error",
      () => {
        image.classList.add("is-hidden");
      },
      { once: true }
    );
  });
}

function getPackageTemplate(packageId) {
  return packageTemplates[currentLanguage]?.[packageId] || packageTemplates.en[packageId] || "";
}

function syncPrefilledMessage() {
  const messageField = document.querySelector('textarea[name="message"]');

  if (!messageField || !messageField.dataset.prefilledPackage) {
    return;
  }

  messageField.value = getPackageTemplate(messageField.dataset.prefilledPackage);
}

function getPackageName(packageId) {
  const packageKeys = {
    starter: "pricing.starter.name",
    professional: "pricing.professional.name",
    advanced: "pricing.advanced.name",
  };

  return getTranslation(packageKeys[packageId] || "");
}

function initFormToast() {
  const toast = document.getElementById("form-toast");
  const closeButton = document.getElementById("form-toast-close");

  if (!toast || !closeButton) {
    return;
  }

  closeButton.addEventListener("click", () => {
    hideFormToast();
  });
}

function setFormStatus(statusKey, packageId = "") {
  const status = document.getElementById("form-status");

  if (!status) {
    return;
  }

  status.dataset.statusKey = statusKey;

  if (packageId) {
    status.dataset.packageId = packageId;
  } else {
    delete status.dataset.packageId;
  }

  status.textContent = getFormStatusMessage(statusKey, packageId);
}

function syncFormStatus() {
  const status = document.getElementById("form-status");

  if (!status) {
    return;
  }

  const statusKey = status.dataset.statusKey || "default";
  const packageId = status.dataset.packageId || "";
  status.textContent = getFormStatusMessage(statusKey, packageId);
}

function setSubmitButtonState(stateKey = "idle") {
  const submitButton = document.querySelector('#contact-form button[type="submit"]');
  const label = submitButton?.querySelector("span");

  if (!submitButton || !label) {
    return;
  }

  submitButton.dataset.state = stateKey;
  submitButton.classList.toggle("is-loading", stateKey === "submitting");
  submitButton.setAttribute("aria-busy", String(stateKey === "submitting"));
  label.textContent = getSubmitButtonLabel(stateKey);
}

function syncSubmitButtonState() {
  const form = document.getElementById("contact-form");
  const isSubmitting = Boolean(form?.classList.contains("is-submitting"));
  setSubmitButtonState(isSubmitting ? "submitting" : "idle");
}

function getSubmitButtonLabel(stateKey = "idle") {
  if (stateKey === "submitting") {
    return currentLanguage === "hi" ? "भेजा जा रहा है..." : "Sending...";
  }

  return getTranslation("form.submit") || "Send Message";
}

function showFormToast(statusKey, packageId = "") {
  const toast = document.getElementById("form-toast");
  const icon = document.getElementById("form-toast-icon");
  const eyebrow = document.getElementById("form-toast-eyebrow");
  const title = document.getElementById("form-toast-title");
  const message = document.getElementById("form-toast-message");
  const closeButton = document.getElementById("form-toast-close");

  if (!toast || !icon || !eyebrow || !title || !message || !closeButton) {
    return;
  }

  const content = getFormToastContent(statusKey, packageId);

  if (!content) {
    hideFormToast(true);
    return;
  }

  window.clearTimeout(formToastTimeoutId);
  formToastTimeoutId = null;

  toast.dataset.state = content.state;
  toast.dataset.statusKey = statusKey;

  if (packageId) {
    toast.dataset.packageId = packageId;
  } else {
    delete toast.dataset.packageId;
  }

  eyebrow.textContent = content.eyebrow;
  title.textContent = content.title;
  message.textContent = content.message;
  icon.innerHTML = getFormToastIcon(content.state);
  closeButton.setAttribute(
    "aria-label",
    currentLanguage === "hi" ? "नोटिफिकेशन बंद करें" : "Dismiss notification"
  );
  toast.setAttribute("aria-live", content.state === "error" || content.state === "validation" ? "assertive" : "polite");
  toast.hidden = false;

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  if (content.autoHideMs > 0) {
    formToastTimeoutId = window.setTimeout(() => {
      hideFormToast();
    }, content.autoHideMs);
  }
}

function hideFormToast(immediate = false) {
  const toast = document.getElementById("form-toast");

  if (!toast) {
    return;
  }

  window.clearTimeout(formToastTimeoutId);
  formToastTimeoutId = null;
  toast.classList.remove("is-visible");

  if (immediate) {
    toast.hidden = true;
    return;
  }

  window.setTimeout(() => {
    if (!toast.classList.contains("is-visible")) {
      toast.hidden = true;
    }
  }, 320);
}

function syncFormToast() {
  const toast = document.getElementById("form-toast");

  if (!toast || toast.hidden) {
    return;
  }

  showFormToast(toast.dataset.statusKey || "default", toast.dataset.packageId || "");
}

function getFormToastContent(statusKey, packageId = "") {
  if (statusKey === "validation") {
    return {
      state: "validation",
      eyebrow: currentLanguage === "hi" ? "ध्यान दें" : "Heads Up",
      title: currentLanguage === "hi" ? "कृपया सभी ज़रूरी फ़ील्ड भरें" : "Complete the required details",
      message:
        currentLanguage === "hi"
          ? "नाम, ईमेल और मैसेज भरने के बाद form दोबारा submit करें।"
          : "Add your name, email, and message, then submit the form again.",
      autoHideMs: 4200,
    };
  }

  if (statusKey === "submitting") {
    return {
      state: "submitting",
      eyebrow: currentLanguage === "hi" ? "सिक्योर ट्रांसमिशन" : "Secure Transmission",
      title: currentLanguage === "hi" ? "आपका मैसेज भेजा जा रहा है" : "Sending your message",
      message:
        currentLanguage === "hi"
          ? "आपकी inquiry Formspree के माध्यम से securely deliver हो रही है।"
          : "Your inquiry is being delivered securely through Formspree.",
      autoHideMs: 0,
    };
  }

  if (statusKey === "success") {
    return {
      state: "success",
      eyebrow: currentLanguage === "hi" ? "मैसेज डिलीवर्ड" : "Message Delivered",
      title: currentLanguage === "hi" ? "Inquiry सफलतापूर्वक भेज दी गई" : "Inquiry sent successfully",
      message:
        currentLanguage === "hi"
          ? "बहुत बढ़िया. आपका संदेश पहुंच गया है और मैं जल्द ही आपसे संपर्क करूंगा।"
          : "All set. Your message has been delivered and I will get back to you shortly.",
      autoHideMs: 5200,
    };
  }

  if (statusKey === "error") {
    return {
      state: "error",
      eyebrow: currentLanguage === "hi" ? "डिलीवरी इश्यू" : "Delivery Issue",
      title: currentLanguage === "hi" ? "अभी भेजने में समस्या आ रही है" : "Couldn't send it just now",
      message:
        currentLanguage === "hi"
          ? "कृपया कुछ देर बाद फिर कोशिश करें, या WhatsApp और LinkedIn के माध्यम से संपर्क करें।"
          : "Please try again in a moment, or reach out through WhatsApp or LinkedIn instead.",
      autoHideMs: 5600,
    };
  }

  if (statusKey === "packageSelected" && packageId) {
    return {
      state: "submitting",
      eyebrow: currentLanguage === "hi" ? "पैकेज चुना गया" : "Package Selected",
      title:
        currentLanguage === "hi"
          ? `${getPackageName(packageId)} तैयार है`
          : `${getPackageName(packageId)} is ready`,
      message:
        currentLanguage === "hi"
          ? "अब अपनी details भरें और inquiry भेजें."
          : "Now add your details and send the inquiry.",
      autoHideMs: 3600,
    };
  }

  return null;
}

function getFormToastIcon(state) {
  if (state === "success") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="m9.55 16.6-3.9-3.9 1.41-1.41 2.49 2.49 7.39-7.39 1.41 1.41-8.8 8.8Z"></path>
      </svg>
    `;
  }

  if (state === "error" || state === "validation") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M11 6h2v8h-2V6Zm0 10h2v2h-2v-2Z"></path>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-1.76-4.24L14.5 9.5H20V4l-2.34 2.34A7.96 7.96 0 0 0 12 4Z"></path>
    </svg>
  `;
}

function getFormStatusMessage(statusKey, packageId = "") {
  if (statusKey === "validation") {
    return currentLanguage === "hi"
      ? "संदेश भेजने से पहले सभी फ़ील्ड भरें।"
      : "Please complete all fields before sending your message.";
  }

  if (statusKey === "submitting") {
    return currentLanguage === "hi"
      ? "आपका संदेश सुरक्षित रूप से भेजा जा रहा है..."
      : "Sending your message securely...";
  }

  if (statusKey === "success") {
    return currentLanguage === "hi"
      ? "मैसेज सफलतापूर्वक भेज दिया गया है। मैं जल्द ही आपसे संपर्क करूंगा।"
      : "Message sent successfully. I will get back to you shortly.";
  }

  if (statusKey === "error") {
    return currentLanguage === "hi"
      ? "अभी संदेश भेजने में समस्या आ रही है। कृपया कुछ देर बाद फिर कोशिश करें।"
      : "There was a problem sending your message. Please try again in a moment.";
  }

  if (statusKey === "packageSelected" && packageId) {
    return currentLanguage === "hi"
      ? `${getPackageName(packageId)} चुना गया। नीचे अपनी जानकारी भरें और संदेश भेजें।`
      : `${getPackageName(packageId)} selected. Add your details below and send your message.`;
  }

  return currentLanguage === "hi"
    ? "अपना project brief भेजें और मैं जल्द ही जवाब दूंगा।"
    : "Send your project brief and I will reply shortly.";
}

function initBackToTop() {
  const button = document.getElementById("back-to-top");

  if (!button) {
    return;
  }

  const toggleVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 520);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
  });

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });
}

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");

  if (!bar) {
    return;
  }

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function initRevealAnimations() {
  const revealItems =
    typeof gsap !== "undefined"
      ? gsap.utils.toArray(".reveal")
      : [...document.querySelectorAll(".reveal")];

  if (!revealItems.length) {
    return;
  }

  if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined" &&
    !prefersReducedMotion.matches
  ) {
    gsap.registerPlugin(ScrollTrigger);

    revealItems.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        delay: index < 2 ? index * 0.12 : 0,
        scrollTrigger: {
          trigger: item,
          start: "top 84%",
          once: true,
        },
      });
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function getTranslation(key) {
  if (!key) {
    return "";
  }

  return translations[key]?.[currentLanguage] || translations[key]?.en || "";
}
