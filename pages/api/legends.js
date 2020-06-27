import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const raw = await req.LegendModel.find();

  res.send(raw);
});

export default handler;
