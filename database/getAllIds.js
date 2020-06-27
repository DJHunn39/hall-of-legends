import mongoose from 'mongoose';
import LegendModel from '../models/legend/legend';

const getAllIds = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  const ids = await LegendModel.find().distinct('_id', (error, ids) =>
    error ? error : ids,
  );

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return paths;
};

export default getAllIds;
