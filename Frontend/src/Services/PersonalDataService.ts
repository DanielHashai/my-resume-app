import axios from "axios";
import ExperienceModel from "../Models/ExperienceModel";
import ProjectModel from "../Models/ProjectModel";

import appConfig from "../utils/appConfig";
class PersonalDataService {
  public async getAllProjects(): Promise<ProjectModel[]> {
    return [
      {
        projectId: 1,
        name: "Karina Tut Berries",
        imageName: "karina_tut_berries_photo.jpeg",
        link: "https://karinatutberries.com/",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736374603/karina_tut_berries_photo_t57w5f.jpg", // Add imageURL
      },
      {
        projectId: 3,
        name: "Massage Booking Website",
        imageName: "60a99165-517a-410c-98c0-2a51105fa895.png",
        link: "https://massage-israel.firebaseapp.com/",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736378548/WhatsApp_Image_2025-01-09_at_01.19.56_1_c5o6vr.jpg", // Add imageURL
      },
      {
        projectId: 3,
        name: "Interface Soft",
        imageName: "60a99165-517a-410c-98c0-2a51105fa895.png",
        link: "https://interfacesoft.co.il/",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736375832/interface_soft_photo_ni77uw.jpg", // Add imageURL
      },
      {
        projectId: 2,
        name: "ChatInTact",
        imageName: "d59c9050-546c-4800-9f42-acbb99b0b2ce.png",
        link: "https://github.com/DanielHashai/chat-intact-app.git",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736375125/chatintact_photo_z6qwsf.jpg", // Add imageURL
      },
      {
        projectId: 3,
        name: "Backend API Generator Website",
        imageName: "60a99165-517a-410c-98c0-2a51105fa895.png",
        link: "https://github.com/DanielHashai/crypto-website.git",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736376297/admin_dash_photo_xnurqc.jpg", // Add imageURL
      },
      {
        projectId: 3,
        name: "Crypto App",
        imageName: "60a99165-517a-410c-98c0-2a51105fa895.png",
        link: "https://github.com/DanielHashai/crypto-website.git",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736376801/crypto_photo_ygeflh.jpg", // Add imageURL
      },
      {
        projectId: 4,
        name: "Vacation App",
        imageName: "2f727a10-a6fc-4c03-942c-a96e9eb906bc.png",
        link: "https://github.com/DanielHashai/booking-vacation-website.git",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736377305/booking_photo_npcb57.jpg", // Add imageURL
      },
      {
        projectId: 5,
        name: "Notes App",
        imageName: "d59c9050-546c-4800-9f42-acbb99b0b2ce.png",
        link: "https://github.com/DanielHashai/Notes-website.git",
        imageURL:
          "https://res.cloudinary.com/dsapexsuq/image/upload/v1736377581/WhatsApp_Image_2025-01-09_at_01.05.17_qt1cqc.jpg", // Add imageURL
      },
    ];
  }

  public async getAllExperience(): Promise<ExperienceModel[]> {
    return [
      {
        id: 1,
        topic: "frontend and backend website architecture",
        role: "Tools & Frameworks",
        detail:
          "React.js |  Javascript | TypeScript | Node.js | REST API - AJAX | CSS | SCSS | HTML | MySQL | PHP | JQuery",
      },
      {
        id: 2,
        topic: "Automated Business Processes",
        role: "Services",
        detail:
          "Landing Page Automations(lead generation) - Wordpress/Shopify/Konimbo | CRM Automations - Monday.com/Zoho/Fireberry/origami and much more | Marketing Automations | AI BOTS Automations | Booking Appoinments/Reminders/Credit Card Automations | API Handling Transfering Of Data         ",
      },

      {
        id: 4,
        topic: "Automation Skills",
        role: "Development Tools",
        detail:
          "Pipedream |  Make(integromat) | Zappier | Calendly | EverWebinar",
      },
    ];
  }
  public async getAllAboveExperience(): Promise<ExperienceModel[]> {
    return [
      {
        id: 1,
        topic: "Connectop LTD -  2023 - Present",
        role: "Automation Team Lead & Senior Programmer",
        detail:
          "Lead the development and implementation of automated solutions to enhance operational efficiency.Utilize a range of software technologies, including AI, to create innovative solutions tailored to client needs.Continuously explore and integrate new technologies to improve and expand automation capabilities.Collaborate with cross-functional teams to ensure seamless integration of automated processes.Maintain a strong focus on innovation, constantly seeking and developing better solutions for our customers.",
      },
      {
        id: 2,
        topic: "Corporate Projects",
        role: "Tools & Frameworks",
        detail:
          "Sonol | Gaz yagel | Babylon Park | Kan 11 | Radio 2000 | Kol Israel | Galbit | Kata Group",
      },
    ];
  }
}

const personalDataService = new PersonalDataService();
export default personalDataService;
