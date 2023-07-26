/* eslint-disable @typescript-eslint/no-explicit-any */
import { type SchemaTypeDefinition } from 'sanity'
import { schemaTypes } from './schemas'

// eslint-disable-next-line import/prefer-default-export
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes as any,
}
