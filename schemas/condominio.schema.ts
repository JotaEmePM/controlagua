import { ICondominio } from "@/interfaces/condominio/condominio.interface";
import { model, Schema } from "mongoose";

export const condominioSchema = new Schema<ICondominio>({
    nombre: { type: String, required: true },
    slug: { type: String, required: true },
    email: { type: String, required: true },
    rut: { type: String, required: true },
    avatar: { type: String, required: false },
    valid_from: { type: Date, required: true },
    user_admin: { type: [String], required: true },
    enabled: { type: Boolean, required: true },
    visible: { type: Boolean, required: true }
})

export const Condominio = model<ICondominio>('Condominio', condominioSchema);