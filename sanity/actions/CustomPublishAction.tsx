/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useDocumentOperation } from 'sanity'
import slugify from 'slugify'
import { client } from '../lib/client'

async function getSlug(reference: string, fallback: string) {
  if (reference) {
    const refDoc = await client.fetch(`*[_id == "${reference}"][0]{"slug": slug.current}`)
    return refDoc.slug
  }
  return slugify(fallback, { lower: true })
}

export default function CustomPublishAction(props: any) {
  const { patch, publish } = useDocumentOperation(props.id, props.type)
  const [slug, setSlug] = useState('')
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }

    // Handle getting the slug from reference
    async function getSlugFn() {
      if (props.draft) {
        const s = await getSlug(props?.draft?.reference?._ref, props?.draft?.title)
        setSlug(s)
      }
    }
    getSlugFn()
  }, [props.draft])
  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: () => {
      // This will update the button text
      setIsPublishing(true)

      // Set slug
      patch.execute([{ set: { slug: { current: slug ?? props.title } } }])

      // Perform the publish
      publish.execute()

      // Signal that the action is completed
      props.onComplete()
    },
  }
}
