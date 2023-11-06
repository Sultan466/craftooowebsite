import React, { useState } from "react";
import "./ExplorOffer.css";

const offeringsData = [
  {
    title: "Software Development",
    description:
      "A software development company with 34 years of business excellence, we can develop reliable, scalable, and secure software solutions for any OS, browser, and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    services: [
      "Software consulting",
      "Custom software development",
      "Software development outsourcing",
      "Software product development",
      "Team augmentation",
      "Cloud application development",
      "Legacy software modernization",
    ],
  },
  {
    title: "Testing & QA",
    description:
      "We offer full-range QA and testing outsourcing services, can help to develop your QA or enhance the existing one, assist you in TCoE setup and evolution. We perform end-to-end testing of mobile, web, and desktop application at each stage of the development lifecycle.",
    services: [
      "QA outsourcing",
      "QA consulting",
      "Security testing",
      "Functional testing",
      "Usability testing",
      "Performance testing",
      "Test automation",
    ],
  },
  {
    title: "Application Services",
    description:
      "Our experts help mid-sized and large firms build, test, protect, manage, migrate, and optimize digital solutions ensuring they’re always up and running and achieve the optimal TCO.",
    services: [
      "Application management",
      "Application modernization",
      "Application integration",
      "Application security services",
      "Application development",
      "Application testing",
      "Application maintenance and support",
    ],
  },
  {
    title: "UX/UI Design",
    description:
      "User experience and user interface design for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.",
    services: [
      "User Interface (UI) Design",
      "Responsive Web App Design",
      "Software-as-a-Service (SaaS) UI Design",
      "Ecommerce Website Design",
      "User Experience (UX) Design",
      "Website Redesign",
      "Responsive Web Design",
    ],
  },
  {
    title: "IT Consulting",
    description:
      "Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.",
    services: [
      "Digital Transformation Consulting",
      "Project Management Consulting",
      "Digital Crisis Management Consulting",
      "IT Service Management Consulting",
      "Solution consulting",
      "Platform consulting",
      "Enterprise IT consulting",
    ],
  },
  {
    title: "Data Analytics",
    description:
      "We support businesses in achieving fact-based decision-making by converting their historical and real-time, traditional and big data into actionable insights. Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.",
    services: [
      "Business Intelligence",
      "Big Data",
      "Data Warehousing",
      "Data Science",
      "Data Management",
      "Machine and Deep Learning",
      "Data Analytics as a Service",
    ],
  },
  {
    title: "Help Desk Services",
    description:
      "Help desk services for your IT environment or software products. We take on solving diverse issues from answering application functionality questions to performing fixes and enhancements on the code level for improved adoption of software, its smooth functioning, and increased end user satisfaction.",
    services: [
      "Help desk outsourcing",
      "IT help desk services",
      "Outsourced help desk for MSP",
      "NOC outsourcing",
    ],
  },
  {
    title: "Infrastructure Services",
    description:
      "We apply our 16-year experience to offer a full set of infrastructure services. Being ISO 27001 certified, we guarantee that cooperation with us does not pose any risks to our customers’ data security.",
    services: [
      "Managed IT support",
      "Data center support and management",
      "Cloud consulting and management",
      "DevOps consulting and implementation",
      "Virtual desktop consulting, implementation, and support",
      "Networking management services",
    ],
  },
  {
    title: "Cybersecurity Services",
    description:
      "Equipped with 20-year experience in information security and employing ISO 27001 certified information security management practices, we help to achieve the robust protection of the companies’ applications and networks.",
    services: [
      "Security assessment",
      "Managed security services",
      "Security testing",
      "Information security consulting",
      "Security code review",
      "Compliance assessment",
      "Penetration testing",
    ],
  },
];

const ExplorOffer = () => {
  const [activeOffering, setActiveOffering] = useState(null);

  const toggleOffering = (index) => {
    setActiveOffering(index);
  };

  return (
    <div className="main-container">
      <h1 className="heading">Explore Our Offering</h1>
      <section className="offerings">
        <div className="titles-column">
          {offeringsData.map((offering, index) => (
            <div
              key={index}
              className={`offering-title ${
                index === activeOffering ? "active" : ""
              }`}
              onClick={() => toggleOffering(index)}
            >
              {offering.title}
            </div>
          ))}
        </div>
        <div className="info-column">
          {activeOffering !== null && (
            <div className="offering-info">
              <h2>{offeringsData[activeOffering].title}</h2>
              {offeringsData[activeOffering].description && (
                <p className="description">
                  {offeringsData[activeOffering].description}
                </p>
              )}
              {offeringsData[activeOffering].services && (
                <ul className="services-list">
                  {offeringsData[activeOffering].services.map(
                    (service, serviceIndex) => (
                      <li key={serviceIndex}>{service}</li>
                    )
                  )}
                </ul>
              )}
              <a className="explore-link" href="/">
                Explore Further
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExplorOffer;
