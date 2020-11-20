import React from 'react'

export default function Card(props) {

    return (
        <div className={`col-md-${props.col}`}>
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">{props.title}</h3>
                </div>
                <div className="box-body">
                    {props.children}
                </div>

            </div>
        </div>
    )
}
