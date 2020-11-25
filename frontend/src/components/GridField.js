import React from 'react'

export default function GridField(props) {
    return (
        <div className="p-field p-col">
            <label htmlFor="firstname2">{props.label}</label>
            {props.children}
        </div>
    )
}
