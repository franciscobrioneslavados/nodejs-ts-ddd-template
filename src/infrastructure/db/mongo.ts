/* eslint-disable @typescript-eslint/no-var-requires */
import { connect } from 'mongoose';
require('dotenv').config();

const MONGO_URI = `${process.env.MONGO_URI}`;

const dbInit = async () => {
  await connect(MONGO_URI, {
    dbName: 'test',
    ssl: false,
  });
  console.log('Estamos ready?');
};

export default dbInit;
