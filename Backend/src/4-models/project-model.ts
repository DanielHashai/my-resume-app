import { UploadedFile } from "express-fileupload";

class ProjectModel {
    public projectId: number;
    public name: string;
    public image: UploadedFile;
    public imageName: string;
    public link: string;
    public imageURL:string


    public constructor(project: ProjectModel) {
        this.projectId = project.projectId;
        this.name = project.name;
        this.image = project.image;
        this.imageName = project.imageName;
        this.link = project.link;
        this.imageURL = project.imageURL;
    }
}
export default ProjectModel; 