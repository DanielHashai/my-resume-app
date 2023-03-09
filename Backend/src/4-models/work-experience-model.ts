class WorkExperienceModel {

    public id: number;
    public topic: string;
    public role: string;
    public detail: string;


    public constructor(workExperience: WorkExperienceModel) {
        this.id = workExperience.id
        this.topic = workExperience.topic;
        this.role = workExperience.role;
        this.detail = workExperience.detail;
    }


}
export default WorkExperienceModel;