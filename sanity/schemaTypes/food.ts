import { defineType } from 'sanity';

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'productDescr',
        title: 'Product Description',
        type: 'text',
      },
      {
        name: 'productPrice',
        title: 'Product Price',
        type: 'number',
      },
      {
        name: 'productCategory',
        title: 'Product Category',
        type: 'string',
      },
      {
        name: 'productQuantity',
        title: 'Product Quantity',
        type: 'number',
      },
      {
        name: 'productImage',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'productRating',
        title: 'Product Rating',
        type: 'number',
      },
      {
        name: 'productSale',
        title: 'On Sale',
        type: 'boolean',
      },
      {
        name: 'productDiscount',
        title: 'Product Discount (%)',
        type: 'number',
      },
      {
        name: 'productMenuDescr',
        title: 'Menu Description',
        type: 'string',
      },
      {
        name: 'deliveryOptions',
        title: 'Delivery & Pickup Options',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'delivery' }] }],
      },
      {
        name: 'productReviews',
        title: 'Product Reviews',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'userName',
                title: 'User Name',
                type: 'string',
              },
              {
                name: 'userEmail',
                title: 'User Email/Avatar',
                type: 'string', // Can be used for email or avatar URL
              },
              {
                name: 'userReviewDescr',
                title: 'Review Description',
                type: 'text',
              },
              {
                name: 'userRating',
                title: 'User Rating',
                type: 'string', // Alternatively, use `number` if ratings are numeric
              },
              {
                name: 'createdAt',
                title: 'Review Created At',
                type: 'datetime',
              },
            ],
          },
        ],
      },
    ],
  },
);
