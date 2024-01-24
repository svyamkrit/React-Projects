import React from 'react'

const Alert = (props) => {
  return (
    props.alert && <div className="alert alert-success d-flex align-items-center justify-content-center " role="alert" >
    <div>
      {props.alert.message}
    </div>
  </div>
  )
}

export default Alert
