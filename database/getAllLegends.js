import mongoose from 'mongoose';
import LegendModel from '../models/legend/legend';

const getAllLegends = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  const legends = await LegendModel.find();

  return legends;
};

export default getAllLegends;
