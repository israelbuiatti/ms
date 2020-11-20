import React from 'react'

export default function MenuPage(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="box">
                    <div className="box-body">
                        {
                            props.itens.map((item,i) => (
                                <a key={i} className="btn btn-app" href={item.url}> <i className="fa fa-edit"></i> {item.label} </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
