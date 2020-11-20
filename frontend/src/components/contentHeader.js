import React from 'react'

export default function ContentHeader(props) {
    return (
        <section className="content-header">
            <h1> {props.title} </h1>
            {props.children}
        </section>
    )
}
