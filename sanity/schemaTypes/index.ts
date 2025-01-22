import { type SchemaTypeDefinition } from 'sanity'
import food from "@/sanity/schemaTypes/food"
import chef from "@/sanity/schemaTypes/chef"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food,chef],
}
