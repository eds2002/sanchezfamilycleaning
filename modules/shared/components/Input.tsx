/* eslint-disable react/jsx-props-no-spreading */

'use client'

import React from 'react'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  invalidCN: string
}

export default function Input(props: Props) {
  const [hasFocused, setHasFocused] = React.useState(false)
  const { className, invalidCN, ...allOtherProps } = props

  return (
    <input
      {...allOtherProps}
      className={`${className} ${hasFocused ? invalidCN : ''}`}
      onBlur={() => setHasFocused(true)}
    />
  )
}
