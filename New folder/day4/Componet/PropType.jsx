import React from 'react'
import { Fragment } from 'react'

import type from 'prop-types'


function PropType({sname,age}) {
  return (
    <Fragment>
      <h1>
        my name is {sname} and my age is {age}
      </h1>
    </Fragment>
  )


}

PropType.propType={
  sname: type.string,
  age : type.number

}

export default PropType

