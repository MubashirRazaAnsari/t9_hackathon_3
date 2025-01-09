import { defineType } from 'sanity';

export default defineType({
  name: 'delivery',
  title: 'Delivery',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Delivery Type',
      type: 'string',
      description: 'The type of delivery (e.g., Home Delivery, Pickup)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'estimatedTime',
      title: 'Estimated Time',
      type: 'string',
      description: 'The estimated time for delivery or pickup (e.g., "30-45 minutes")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pickupAvailable',
      title: 'Pickup Available',
      type: 'boolean',
      description: 'Whether pickup is available for this delivery option',
      initialValue: true,
    },
  ],
});
