import { type SchemaTypeDefinition } from 'sanity'
import food from './food'
import delivery from './delivery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, delivery],
}
