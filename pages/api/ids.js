import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const ids = await req.LegendModel.find().distinct('_id', (error, ids) =>
    error ? error : ids,
  );

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  console.log(paths);
  res.send(paths);
});

export default handler;
