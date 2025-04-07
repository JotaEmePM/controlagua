import { IConnectionResult } from '@/interfaces/database/IConnectionResult'
import mongoose from 'mongoose'

const connectDB = async (): Promise<IConnectionResult<typeof mongoose>> => {
    try {
        let mongoUrl = process.env.MONGOURL! as string
        await mongoose.connect(mongoUrl);

        return {
            success: true,
            data: mongoose
        }
    } catch (error: any) {
        return {
            success: false,
            error: {message: error.message}
        }
    }
}

export default connectDB