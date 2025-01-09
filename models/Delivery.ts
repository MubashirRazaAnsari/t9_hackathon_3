import { Schema, model, models } from 'mongoose';

const deliverySchema = new Schema(
  {
    type: { type: String, required: true },
    estimatedTime: { type: String, required: true },
    pickupAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Delivery = models.Delivery || model('Delivery', deliverySchema);

export default Delivery;
