import { Document, model, Schema } from "mongoose";
import { IUser } from "../interfaces/admin/IUSer";

interface IUserModel extends IUser, Document{};

const UserSchema: Schema = new Schema<IUserModel>({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const User = model<IUserModel>('User', UserSchema);

export default User;