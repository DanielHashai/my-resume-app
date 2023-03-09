import dal from "../2-utils/dal";
import ProjectModel from "../4-models/project-model";
import WorkExperienceModel from "../4-models/work-experience-model";
import imageHandler from "../2-utils/image-handler";
import { OkPacket } from "mysql";

async function getAllWorkExperience(): Promise<WorkExperienceModel[]> {

    const sql = "SELECT * FROM experience";

    const experiences = await dal.execute(sql);

    return experiences;

}

async function getAllProjects(): Promise<ProjectModel[]> {

    const sql = "SELECT * FROM projects";

    const projects:ProjectModel[] = await dal.execute(sql);

    projects.map((p) => {
        p.imageURL = "http://localhost:3002/api/projects/image/" + p.imageName;
    });

    return projects;

}

async function addProject(project: ProjectModel): Promise<ProjectModel> {

    project.imageName = await imageHandler.saveImage(project.image);
    const sql = "INSERT INTO projects VALUES(DEFAULT,?,?,?)";

    const projects: OkPacket = await dal.execute(sql, project.name, project.imageName, project.link);
    project.projectId = projects.insertId;
    return project;

}



export default {
    getAllWorkExperience,
    getAllProjects,
    addProject
}
