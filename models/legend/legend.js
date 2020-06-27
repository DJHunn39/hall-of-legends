import mongoose from 'mongoose';
import leagueCodes from './leagueCodes';

const Season = new mongoose.Schema({
  year: { type: String },
  data: {
    club: { type: String },
    league: {
      type: String,
      enum: leagueCodes,
    },
    games: { type: Number, default: 0 },
    goals: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    seasonDesc: { type: String, default: '' },
    overall: { type: Number, min: 0, max: 99, default: 0 },
    cardStats: {
      pac: { type: Number, min: 0, max: 99, default: 0 },
      dri: { type: Number, min: 0, max: 99, default: 0 },
      sho: { type: Number, min: 0, max: 99, default: 0 },
      def: { type: Number, min: 0, max: 99, default: 0 },
      pas: { type: Number, min: 0, max: 99, default: 0 },
      phy: { type: Number, min: 0, max: 99, default: 0 },
    },
  },
});

const Clip = new mongoose.Schema({
  name: { type: String, default: '' },
  youtubeId: { type: String, default: '' },
});

const Hattrick = new mongoose.Schema({
  name: { type: String, default: '' },
  picUrl: { type: String, default: '' },
});

const Legend = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  club: {
    type: String,
    enum: ['Borussia Munchenflapjack', 'Hunnsnal'],
    required: 'league cannot be left blank.',
  },
  clubRank: { type: Number, min: 1 },
  general: {
    fullName: { type: String, required: 'fullName cannot be left blank.' },
    knownAs: { type: String, default: '' },
    position: { type: String, required: 'position cannot be left blank.' },
    nation: { type: String, required: 'nation cannot be left blank.' },
    mainDesc: { type: String, default: '' },
    pictureUrl: { type: String, default: '' },
    pictureSource: { type: String, default: '' },
  },
  seasons: [Season],
  highlights: {
    clips: [Clip],
    hattricks: [Hattrick],
  },
});

module.exports =
  (mongoose.models && mongoose.models.Legends) ||
  mongoose.model('Legends', Legend);
