import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuPage(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="box">
                    <div className="box-body">
                        {
                            props.itens.map((item,i) => (

                                <Link to={item.url}>
                                    <a key={i} className="btn btn-app" href="#"> <i className="fa fa-edit"></i> {item.label} </a>
                                </Link>
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
