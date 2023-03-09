import express, { Request, Response, NextFunction } from "express";
import service from "../5-services/personal-data-service";

import ProjectModel from "../4-models/project-model";
import imageHandler from "../2-utils/image-handler";

const router = express.Router();

router.get("/work-experience", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const workExperience = await service.getAllWorkExperience();
        response.json(workExperience);
    }
    catch (err) {
        next(err);
    }

});

router.post("/projects", async (request: Request, response: Response, next: NextFunction) => {

    try {
        request.body.image = request.files?.image;
        const project = new ProjectModel(request.body);
        const projects = await service.addProject(project);
        response.status(201).json(projects);
    }
    catch (err) {
        next(err);
    }

});



router.get("/projects", async (request: Request, response: Response, next: NextFunction) => {

    try {
        // const imageName = request.params.imageName;
        const projects = await service.getAllProjects();
        response.json(projects);
    }
    catch (err) {
        next(err);
    }

});


router.get("/projects/image/:imageName", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const imageName = request.params.imageName;
        const absolutePath = imageHandler.getAbsolutePath(imageName);
        response.sendFile(absolutePath);
    }
    catch (err) {
        next(err);
    }

});

export default router;