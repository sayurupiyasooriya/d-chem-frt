import React from "react"

const Navigation = (props) => {

    return (
        <div classname="navigation">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">{props.email}</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )


}

export default Navigation