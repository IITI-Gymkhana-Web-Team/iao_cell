import React from 'react'
import data from './data'
import {FiLink} from 'react-icons/fi'
export const Pg_Phd = () => {
    console.log(data);
    return (
        <div className="container mt-5">
            <table className="table table-bordered">
                <tbody>
                    <tr style={{background:'grey'}}>
                        <th>S.No</th>
                        <th>Nature of job</th>
                        <th>Name</th>
                        <th>University</th>
                        <th>Country</th>
                        <th>Application End Date</th>
                        <th>Website</th>
                    </tr>
                    {data.map((item, index) => {
                        return <tr key={index}>
                            <th>{item['S.No']}</th>
                            <th>{item['Nature of job']}</th>
                            <th>{item['Name']}</th>
                            <th>{item['University']}</th>
                            <th>{item['Country']}</th>
                            <th>{item['Application End Date']}</th>
                            <th><a href={item['Website']}><FiLink></FiLink></a></th>
                        </tr>
                    })}
                </tbody> 
            </table>
        </div>
    )
}
