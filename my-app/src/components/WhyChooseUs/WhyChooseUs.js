import React, { useState } from 'react'
import { GiCeilingLight } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import { SiLevelsdotfyi } from "react-icons/si";
import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoNewspaper } from "react-icons/io5";
import Modal from '../Modal/Modal';

const WhyChooseUs = () => {
    const [getUsername,setUsername] = useState('')
    const [getMail,setMail] = useState('')
    const [getGender,setGender] = useState('')
    const [getQualification,setQualification] = useState('')

    const sendDetails={
        getUsername,
        getMail,
        getGender,
        getQualification
    }

    const onChangeUsername=(event)=>{
        setUsername(event.target.value)
    }

    const onChangeMail=(event)=>{
        setMail(event.target.value)
    }
    const onChangeGender=(event)=>{
        setGender(event.target.value)
    }
    
    const onChangeQualification=(event)=>{
        setQualification(event.target.value)
    }

    const onClickSubmit=(event)=>{
        event.preventDefault()

    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4 px-3">
                    <h1 className='text-center fw-bold underline fs-2'>Why Choose Us?</h1>
                    <div className='d-md-flex flex-md-row '>
                        <div className='text-center shadow rounded p-3 mt-4 w-30 me-md-3 bg-primary-subtle'>
                            <GiCeilingLight className='fs-1 mb-4'/>
                            <h1 className='fs-5 fw-bold mb-4'>Expert Faculty</h1>
                            <p> Expert faculty members possess deep knowledge and understanding of their subject area.</p>
                        </div>
                        <div className='text-center shadow rounded p-3 mt-4  w-30 me-md-3 bg-primary-subtle'>
                            <FaPeopleGroup className='fs-1 mb-4'/>
                            <h1 className='fs-5 fw-bold mb-4'>Complete Success Package</h1>
                            <p> Some success packages offer coaching or mentoring services provided by experienced professionals.</p>
                        </div>
                        <div className='text-center shadow rounded p-3 mt-4  w-30 bg-primary-subtle'>
                            <RiUserLocationFill className='fs-1 mb-4'/>
                            <h1 className='fs-5 fw-bold mb-4'>Placements</h1>
                            <p> Some companies and organizations participate in campus recruitment activities, such as career fairs, information sessions.</p>
                        </div>
                    </div>
                    <div className='d-md-flex flex-md-row flex-wrap justify-content-around mt-4'>
                        <div className='border-top border-3 border-primary p-4 w-md-50  mb-5  shadow rounded'>
                            <h1 className='fs-5 mb-4'>Levels</h1>
                            <div className='d-flex flex-row mt-3'>
                                <SiLevelsdotfyi className='me-3 fs-4'/>
                                <p>Up to 5 levels</p>
                            </div>
                        </div>
                        <div className='border-top border-3 border-primary p-4 w-md-50  mb-5  shadow rounded'>
                            <h1 className='fs-5 mb-4'>Duration</h1>
                            <div className='d-flex flex-row align-items-start'>
                                <LuClock className='me-3 fs-4'/>
                                <p>Up to 10 months</p>
                            </div>
                        </div>
                        <div className='border-top border-3 border-primary p-4 w-md-50  mb-5   shadow rounded'>
                            <h1 className='fs-5 mb-4'>Exams</h1>
                            <div className='d-flex flex-row'>
                                <IoNewspaper className='me-3 fs-4'/>
                                <p>Pattern Medium</p>
                            </div>
                        </div>
                        <div className='border-top border-3 border-primary p-4 w-md-50  mb-5  shadow rounded'>
                            <h1 className='fs-5 mb-4'>Exemptions</h1>
                            <div className='d-flex flex-row'>
                                <SlCalender className='me-3 fs-4' />
                                <p>Up to 5 months</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-3 py-0 ">
                    <h1 className='fs-4 text-center underline'>What will you Learn in ACCA?</h1>
                    <div className='d-md-flex flex-md-row  mt-5'>
                        <div className='mt-4 me-md-3 shadow'>
                            <div className='bg-primary text-center text-white p-3'>
                                <p className='fs-5'>Knowledge Level</p>
                            </div>
                            <ul className='list px-5 py-3'>
                                    <li>Understanding of the topic.</li>
                                    <li>Knowledge level points </li>
                                    <li>Acquired some experience and knowledge</li>
                                </ul>
                                <div className='bg-primary text-center text-white p-3'>
                                    <p className='fs-5'>3 Pages</p>
                                </div>
                        </div>

                        <div className='mt-4 me-md-3 shadow'>
                            <div className='bg-primary text-center text-white p-3'>
                                <p className='fs-5'>Knowledge Level</p>
                            </div>
                            <ul className='list px-5 py-3'>
                                    <li>Understanding of the topic.</li>
                                    <li>Knowledge level points </li>
                                    <li>Acquired some experience and knowledge</li>
                                </ul>
                                <div className='bg-primary text-center text-white p-3'>
                                    <p className='fs-5'>3 Pages</p>
                                </div>
                        </div>

                        <div className='mt-4 me-md-3 shadow'>
                            <div className='bg-primary text-center text-white p-3'>
                                <p className='fs-5'>Knowledge Level</p>
                            </div>
                            <ul className='list px-5 py-3'>
                                    <li>Understanding of the topic.</li>
                                    <li>Knowledge level points </li>
                                    <li>Acquired some experience and knowledge</li>
                                </ul>
                                <div className='bg-primary text-center text-white p-3'>
                                    <p className='fs-5'>3 Pages</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 bg-primary-subtle p-4 mt-3'>
                    <h1 className='fs-4 text-center mb-4 fw-bold underline'>100% Placement Assistance</h1>
                    <div>
                        <h2 className='fs-6 fw-bold '>Resume Building</h2>
                        <p>Building a resume involves several key steps to effectively showcase your skills.</p>
                    </div>
                    <div>
                        <h2 className='fs-6 fw-bold'>Resume Building</h2>
                        <p>Building a resume involves several key steps to effectively showcase your skills.</p>
                    </div>
                </div>
                <div className='col-12 bg-primary-subtle d-md-flex flex-md-row justify-content-between mt-4 p-4'>
                    <div className='w-md-50'>
                        <h1 className='fs-4 fw-bold'>Kick off your ACCA Prep journey with indigo learn</h1>
                        <p>Sign in and get instant access to our Free Courses.</p>
                        <button className='btn btn-danger'>Get Details</button>
                    </div>
                    
                    <form className=" col-12 col-md-5 border-top border-4 border-primary shadow rounded mt-4 mt-md-0 p-3 w-md-50" onSubmit={onClickSubmit}>
                        <h1 className='fs-6 fw-bold text-center'>Applying to be an ACCA? Get in touch with Us!</h1>
                        <input type="text" className='bg-transparent border border-secondary rounded w-100 p-2 p-md-1' placeholder='Enter Your Name' onChange={onChangeUsername}  />
                        <input type="text" className='bg-transparent border border-secondary rounded w-100 p-2 mt-2 p-md-1' placeholder='Enter Your Email...'onChange={onChangeMail} />
                        <select className="form-select mt-2 bg-transparent  border border-secondary rounded w-100 text-secondary p-md-1" onChange={onChangeQualification}>
                            <option selected className='text-secondary'>Exam Qualification</option>
                            <option value="BTech">BTech</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Others">Others</option>
                        </select>
                        <select className="form-select mt-2 bg-transparent  border border-secondary rounded w-100 text-secondary" onChange={onChangeGender}>
                            <option selected >Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <button className='mt-4 ms-o border-0 bg-transparent' style={{height:'30px'}} type='submit'>
                            <Modal formDetails={sendDetails}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs