import React from 'react';
import "./OfficeIR.css";
import { person } from "../../../assets";

export default function OfficeIR() {
    return (
        <>
        <h1 className="mt-3">Contact Us</h1>
        <h3>IITI(IR) Address:</h3>
        <p>Office of Dean(International Relations)</p>
        <p>Indian Institute of Technology Indore</p>
        <p>1st floor, Main Building</p>
        <p>Simrol,Indore</p>
        <p>Madhya Pradesh,India</p>
        <h3 className="mt-5 ">Office Contacts:</h3>
        <div className="row mt-4 p-4" style={{backgroundColor:"rgb(78, 61, 235)"}}>
            <div className="border-0 card row">
                <div>
                    <div className="officecard card-body row">
                        <div className="dean col-lg-3">
                            <h3>Dean</h3>
                            <img style={{width:"8rem",margin:"1rem"}} src={ person }/>
                        </div>
                        <div className="dean2 col-lg-3"><p>Dr. Avinash Sonawane<br></br>
                        Professor, BSBE<br></br>
                        Dean of International Affairs & Outreach<br></br>
                        Email: doiao@iiti.ac.in<br></br>
                        Landline: +91-731-660, Extension: 3357</p></div>
                        <div className="dean col-lg-3">
                            <h3>Associate Dean</h3>
                            <img style={{width:"8rem",margin:"1rem"}} src={ person }/>
                        </div>
                        <div className="dean2 col-lg-3"><p>Dr. Raghunath Sahoo<br></br>
                        Professor, Physics<br></br>
                        Dean of International Affairs & Outreach<br></br>
                        Email: adoiao@iiti.ac.in<br></br>
                        Landline: +91-731-660, Extension: 3329</p></div>
                    </div>
                </div>
            </div>
            <div className="border-0 card row">
                <div >
                    <div className="officecard card-body row">
                        <div className="dean col-lg-3">
                            <h3>Associate Dean</h3>
                            <img style={{width:"8rem",margin:"1rem"}} src={ person }/>
                        </div>
                        <div className="dean2 col-lg-3"><p>Dr. Sanjay Kumar Singh<br></br>
                        Associate Professor, Chemistry<br></br>
                        Associate Dean, International Affairs & Outreach-2<br></br>
                        Email: adoiao2@iiti.ac.in<br></br>
                        Landline: +91-731-660, Extension: 3350</p></div>
                        <div className="dean col-lg-3">
                            <h3>Joint Registrar</h3>
                            <img style={{width:"8rem",margin:"1rem"}} src={ person }/>
                        </div>
                        <div className="dean2 col-lg-3"><p>Mr. Tentu Satyanarayana<br></br>
                        Joint Registrar<br></br>
                        Joint Registrar, International Affairs & Outreach<br></br>
                        Email: drintl@iiti.ac.in<br></br>
                        Landline: +91-731-660, Extension: 3547</p></div>
                    </div>
                </div>
            </div>
            <div className="border-0 card row">
                <div>
                    <div className="officecard card-body row">
                        <div className="dean col-lg-3">
                            <h3>Administrative Officer</h3>
                            <img style={{width:"8rem",margin:"1rem"}} src={ person }/>
                        </div>
                        <div className="dean2 col-lg-3"><p>Mr. Rajan Thomas<br></br>
                        Administrative Officer<br></br>
                        Administrative Officer, International Affairs & Outreach<br></br>
                        Email: aoiao@iiti.ac.in<br></br>
                        Landline: +91-731-660, Extension: 3112</p></div>
                        <div className="dean col-lg-3">
                            <h3>Manager</h3>
                            <img style={{width:"8rem",margin:"1rem"}} src={ person }/>
                        </div>
                        <div className="dean2 col-lg-3"><p>Mr. Vinay Kumar<br></br>
                        Manager<br></br>
                        Manager, International Affairs & Outreach<br></br>
                        Email: vinaykumar@iiti.ac.in<br></br>
                        Landline: +91-731-660, Extension: 3479</p></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
