import connectDB from "@/config/database"
import { IConnectionResult } from "@/interfaces/database/IConnectionResult"
import mongoose from "mongoose"

export const checkDB = async () : Promise<IConnectionResult< typeof mongoose>> => {
    return await connectDB()        
}