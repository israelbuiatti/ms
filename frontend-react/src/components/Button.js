import React from 'react'

export default function Button2(props) {
    return (
        <button {...props} type="button" className={`btn btn-default`} data-toggle="tooltip" title={props.tooltip} style={ {marginRight:'10px'} }>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    )
}
