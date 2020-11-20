import React from 'react'
import Breadcrumb from './breadcrumb'

export default function Content(props) {
    return (
        <>
            <section className="content-header">
                <h1> {props.title} </h1>
                <Breadcrumb itens={props.breadcrumb}/>
            </section>

            <section className="content">
                {props.children}
            </section>
        </>
    )
}
