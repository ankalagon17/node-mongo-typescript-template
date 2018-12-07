import mongoose, {Model, Document } from "mongoose";
import { CONTACT_SCHEMA } from "../models/Contact";
import { Request, Response, NextFunction } from "express";

const CONTACT:Model<Document, any> = mongoose.model("Contact", CONTACT_SCHEMA);

export class ContactController {

    // private _contact = mongoose.model("Contact", CONTACT_SCHEMA);

    public addNewContact(req: Request, res: Response, next: NextFunction): void {
        let newContact: Document = new CONTACT(req.body);
        newContact.save((err: any, contact: Document) => {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        });
    }

    public getContacts(req: Request, res: Response, next: NextFunction): void {
        CONTACT.find({}, (err: any, contact: Document) => {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        });
    }

    public getContactById(req: Request, res: Response, next: NextFunction): void {
        CONTACT.findById(req.params.contactId, (err: any, contact: Document) => {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        });
    }

    public updateContact(req: Request, res: Response, next: NextFunction): void {
        CONTACT.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, (err: any, contact: Document) => {
            if (err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        });
    }

    public deleteContact(req: Request, res: Response, next: NextFunction): void {
        CONTACT.deleteOne({_id: req.params.contactId}, (err: any) => {
            if (err) {
                res.send(err);
            } else {
                res.json({message: 'Successfully deleted contact!'});
            }
        });
    }

}