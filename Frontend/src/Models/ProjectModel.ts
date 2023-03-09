class ProjectModel {
    public projectId: number;
    public name: string;
    public imageName: string;
    public link: string;
    public imageURL: string;


    public constructor(project: ProjectModel) {
        this.projectId = project.projectId;
        this.name = project.name;
        this.imageName = project.imageName;
        this.link = project.link;
        this.imageURL = project.imageURL;
    }
}
export default ProjectModel;