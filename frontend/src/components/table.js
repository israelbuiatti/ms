import React from 'react'

export default function Table(props) {

    const children = props.children;

    return (
        <div className="table-responsive">
            <table className="table no-margin table-hover"> 
                <thead>

                    {React.Children.map(children, (child, i) => {
                        if (i > 1) return
                        return child
                    })}

                </thead>
                <tbody>

                    {React.Children.map(children, (child, i) => {
                        if (i < 1) return
                        return child
                    })}

                </tbody>

            </table>
        </div>
    )
}
