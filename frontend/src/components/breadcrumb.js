import React from 'react'

export default function Breadcrumb(props) {
    return (
        <>
            <ol className="breadcrumb">
                {
                    props.itens.map((item,i) => {

                        const active = item.active?"active":"";
                        const icon = item.active?"":"fa fa-home";
                        
                        return (
                            <li key={i} className={active}><a href={item.url}><i className={icon} /> {item.label}</a></li>
                        )
                    
                    })
                }
            </ol>
        </>
    )
}
