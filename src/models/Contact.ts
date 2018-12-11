import { Typegoose, prop } from "typegoose";

export class Contact extends Typegoose {

    @prop({required: true})
    firstName: string;

    @prop({required: true})
    lastName: string;

    @prop()
    email: string;

    @prop()
    company: string;

    @prop()
    phone: number;

    @prop()
    createdDate: Date;

}