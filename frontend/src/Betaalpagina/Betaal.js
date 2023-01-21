import react, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

export default function Betaling() {
    const [state, setState] = useState(false)

    const {success} = useParams()
    if (success !== "true") setState(false)

    return (
        <>
            <div className="max-w-xl m-auto">
                <p>{state ? "Betaling gelukt!" : "Betaling gefaald :("}</p>
            </div>
        </>
    )
}