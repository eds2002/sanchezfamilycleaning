/* eslint-disable react/jsx-props-no-spreading */

'use client'

import React from 'react'

interface Props
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  invalidCN: string
}

export default function Textarea(props: Props) {
  const [hasFocused, setHasFocused] = React.useState(false)
  const { className, invalidCN, ...allOtherProps } = props

  return (
    <textarea
      {...allOtherProps}
      className={`${className} ${hasFocused ? invalidCN : ''}`}
      onBlur={() => setHasFocused(true)}
    />
  )
}
