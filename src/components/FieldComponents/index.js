import React from 'react'
import SpacerView from 'app/components/Spacer'
import TextLabel from 'app/components/TextLabel'

export const Spacer = props => <SpacerView {...props} />

export const Label = props => (
  <TextLabel
    {...props}
    color={props.color}
    fontFamily={props.fontFamily}
    fontSize={props.fontSize}
    label={props.label}
    navigate={props.navigate}
  />
)
