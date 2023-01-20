import react from 'react'

export default function Betaling() {
    const success = Request.body.success();

    return (
        <>
            <div className="max-w-xl m-auto">
                <p>{success}</p>
            </div>
        </>
    )
}