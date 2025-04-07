import connectDB from "@/config/database";
import { INewCondominio } from "@/interfaces/condominio/new-condominio.interface";
import { IOperationResult } from "@/interfaces/database/IOperationResult";
import { Condominio } from "@/schemas/condominio.schema";
import { getTomorrowDate } from "@/utils/date";
import { userAgent } from "next/server";

export const newCondominio = async (newCondominio: INewCondominio): Promise<IOperationResult<string>> => {
    let db = await connectDB().then(async () => {
        let newCondominioItem = new Condominio({
            nombre: newCondominio.nombre,
            slug: newCondominio.slug,
            email: newCondominio.email,
            rut: newCondominio.rut,
            avatar: newCondominio.admins,
            enabled: true,
            user_admin: [],
            visible: true,
            valid_from: getTomorrowDate()
        }) 

        await newCondominioItem.save()

        return {
            success: true,
            message: 'Usuario creado satisfactoriamente',
            data: newCondominioItem.id!
        }
    }).catch((err) => {
        return {
            success: false,
            message: 'Error en la creacion del usuario'
        }
    })

    return {
        success: false,
        message: 'Error en la creacion del usuario'
    }
}