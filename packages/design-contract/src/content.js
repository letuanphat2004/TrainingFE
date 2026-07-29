export const sharedContent = Object.freeze({
  brand: {
    name: "Beautice",
    description: "Beauty Clinic & Beauty Consultation",
  },
  navigation: [
    { label: "Home", path: "/", hasSubmenu: true },
    { label: "About", path: "/about" },
    { label: "Service", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact", presentation: "button" },
  ],
  contact: {
    address: "101 Baker Street, NY, United States.",
    phone: "+521 569 8966",
    email: "mail@company.com",
  },
  commonActions: {
    contact: "Contact",
    learnMore: "Learn More",
    moreDetails: "More Details",
    readMore: "Read More",
    sendMessage: "Send Message",
    makeAppointment: "Make an Appointment",
    watchVideo: "Watch Video",
  },
  transcriptionStatus: {
    sharedShell: "complete",
    pageCopy: "pending-phase-1-per-page-transcription",
  },
});
