import React from 'react'

export const Newscard = ({ title, text, date, img }) => {
    return (
        <div className="card mb-3 mb-4" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img style={{ width: '100%' }} src={img} />
                </div>
                <div className="col-md-8" style={{ display: 'flex', flexDirection: 'column' }} >
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <span className="text-muted">{date}</span>
                    </div>
                </div>
            </div>

        </div>

    )
}
