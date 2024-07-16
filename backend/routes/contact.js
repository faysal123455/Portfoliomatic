import express from 'express';
import { contacts, createContact, contactById } from '../Controllers/contactController.js';

const contactsRouter = express.Router();

contactsRouter.get('/', contacts);
contactsRouter.get("/:id", contactById);
contactsRouter.post('/', createContact);



export default contactsRouter;
