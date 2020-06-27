import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import LegendModel from '../models/legend/legend';

async function database(req, res, next) {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  req.LegendModel = LegendModel;

  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
