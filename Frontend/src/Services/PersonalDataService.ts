import axios from "axios";
import ExperienceModel from "../Models/ExperienceModel";
import ProjectModel from "../Models/ProjectModel";

import appConfig from "../utils/appConfig";
class PersonalDataService {
  public async getAllProjects(): Promise<ProjectModel[]> {
    const projectsContainer = await axios.get<ProjectModel[]>(appConfig.projectsURL);
    return projectsContainer.data;

  }
  public async getAllExperience(): Promise<ExperienceModel[]> {
    const projectsContainer = await axios.get<ExperienceModel[]>(appConfig.experienceURL);
    return projectsContainer.data;
  }
}

const personalDataService = new PersonalDataService();
export default personalDataService;
