import react, {useEffect, useState} from 'react'

export default function Betaling() {
    const success = Request.body.success();
    //get id as well

    return (
        <>
            <div className="max-w-xl m-auto">
                <p>{success}</p>
            </div>
        </>
    )
}