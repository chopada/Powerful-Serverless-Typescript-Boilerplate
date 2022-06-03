import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import * as path from 'path';

const dotenvPath = path.join(__dirname, '../../../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
    path: dotenvPath
});

export default mongoose.connect(process.env.DB_URL, {
    dbName: process.env.DB_NAME
});