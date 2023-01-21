import react, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

export default function Betaling() {

    const {status} = useParams()

    return (
        <>
            <div className="max-w-xl m-auto">
                <p>{status === "true" ? "Betaling gelukt!" : "Betaling gefaald :("}</p>
            </div>
        </>
    )
}