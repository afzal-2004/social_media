import mongoose from 'mongoose';
import DBNAME from '../constant.js';

const ConnectDb = () => async () => {
  try {
    const Connection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DBNAME}`
    );

    console.log(`Mongo Connected on ${Connection.connection.host}`);
  } catch (error) {
    console.log(`Mongo Db Connection is Failed`, error);
    process.exit(1);
  }
};
export default ConnectDb();
