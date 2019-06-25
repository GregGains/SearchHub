import React, { Fragment } from 'react'
import spinner from "./../../img/spinner.gif"
export default function Spinner() {
    return (
        <Fragment>
            <img className="spinner" src={spinner} alt="Loading..."
            title="loading"
            />
        </Fragment>
    )
}
