import mongoose from 'mongoose'

const deliverySchema = new mongoose.Schema({
  _id: String,
  _type: { type: String, index: true },
  title: String,
  description: String,
}, {
  timestamps: true,
  strict: false // Allow additional fields from Sanity
})

// Add compound index
deliverySchema.index({ _type: 1, createdAt: -1 })

const Delivery = mongoose.models.Delivery || mongoose.model('Delivery', deliverySchema)
export default Delivery
