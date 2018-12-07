import { Express, Request, Response, NextFunction } from "express";
import { ContactController } from "../controllers/ContactController";

export class Routes {

    public contactController: ContactController = new ContactController();

    constructor(_app: Express) {
        _app.route("/").get((req: Request, res: Response, next: NextFunction) => {
            res.status(200).send({message: "GET request successful!!!!"});
        });

        // CONTACTOS
        _app.route("/contacts")
        .get(this.contactController.getContacts)
        .post(this.contactController.addNewContact);

        _app.route('/contact/:contactId')
        .get(this.contactController.getContactById)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact);
    }
}