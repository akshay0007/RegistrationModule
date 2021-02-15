import React from 'react'
import HOC from './HOC'

const Button = (props) => {
    retrun(
        <button style={props.styles}>i am button</button>
    )
}

export default HOC(Button);