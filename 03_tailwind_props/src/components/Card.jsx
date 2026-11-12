import React from 'react'

function Card({productname, TrackName= "12 Track"}) {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-4 bg-white rounded-lg shadow max-w-80">
                <p className="text-gray-900 text-xl font-semibold uppercase">{productname}</p>
                <p className="text-gray-500 text-sm">{TrackName}</p>
                <p className="text-gray-900 font-semibold text-sm mb-3">Frontend Radio</p>
                <img className="rounded-md" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=700&auto=format&fit=crop" alt="" />
            </div>
        </div>
    )
}

export default Card