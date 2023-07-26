/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
/* eslint-disable */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { iconPicker } from 'sanity-plugin-icon-picker'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import CustomPublishAction from './sanity/actions/CustomPublishAction'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  document: {
    actions: (prev) =>
      prev.map((originalAction) => (originalAction.action === 'publish' ? CustomPublishAction : originalAction)) as any,
  },
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    iconPicker(),
  ],
})
