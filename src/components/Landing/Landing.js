import React from 'react'
import API  from '../API';

export const LandingComponent = () => {
  const style = {
    page: {},
    layout: {},
    heading: {
      textAlign: 'center',
      fontSize: '48px',
      margin: '64px'
    }
  }

  return (
    <div style={style.page}>
      <div style={style.layout}>
        <div style={style.heading}>Landing Page</div>
        <API />
      </div>
    </div>
  )
}
