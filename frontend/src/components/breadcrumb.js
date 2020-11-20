import React from 'react'

export default function Breadcrumb(props) {

    return (
        <ol className="breadcrumb">
            <li><a href="/"><i className="fa fa-home"/> Home </a></li>
            {
                props.itens.map((item,i) => {
                    const active = item.active?"active":"";
                    return (
                        <li key={i} className={active}><a href={item.url}> {item.label}</a></li>
                    )
                })
            }
        </ol>
    )
}
