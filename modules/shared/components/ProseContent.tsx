/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { TextEditorType } from '@/modules/interface'
import React from 'react'
import { PortableText } from '@portabletext/react'

export default function ProseContent({ data }: { data: TextEditorType }) {
  return (
    <div className="px-4 py-32 mx-auto prose max-w-7xl">
      <PortableText value={data.textEditor as any} />
    </div>
  )
}
