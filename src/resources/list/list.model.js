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
    postCode: {
      type: String,
      required: true,
      trim: true,
      maxlength: 10
    },
    address: String
  },
  { timestamps: true }
)

listSchema.index({ lat: 1, lng: 1 }, { unique: false })

export const List = mongoose.model('list', listSchema)
