import mongoose from 'mongoose'

const listSchema = new mongoose.Schema(
  {
    lat: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 50
    },
    lng: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 50
    },
    address: String
  },
  { timestamps: true }
)

listSchema.index({ lat: 1, lng: 1 }, { unique: true })

export const List = mongoose.model('list', listSchema)
