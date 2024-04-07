import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { GiNewspaper } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import Modal from '../Modal/Modal';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
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
        <Navbar/>
        <div className='bg-primary-subtle p-3'>
        <div className='container-fluid'>
            <div className='row d-flex flex-md-row justify-content-between'>
                    <div className=' col-12 col-md-6 mb-4 '>
                            <div className=''>
                                <h1 className='fs-4'>Become ACCA in 18 months</h1>
                                <p>ACCA's content approval programme aims to ensure the widest possible access to quality learning materials for ACCA students.</p>
                                <div className='d-flex flex-wrap'>
                                    <div className='d-flex flex-row align-items-center border shadow rounded px-2  mb-3 me-3' style={{width:"auto", height:"40px"}}>
                                        <GiNewspaper className='fs-5'/>
                                        <p className=' ms-3 mb-0'>Exams</p>
                                    </div>
                                    <div className='d-flex flex-row align-items-center border shadow  rounded px-2  mb-3 me-3' style={{width:"auto",height:"40px"}}>
                                        <MdOutlinePeopleAlt className='fs-5'/>
                                        <p className=' ms-3 mb-0'>Faculty</p>
                                    </div>
                                    <div className='d-flex flex-row align-items-center border shadow  rounded px-2  me-3' style={{width:"auto",height:"40px"}}>
                                        <MdSupportAgent className='fs-5'/>
                                        <p className=' ms-3 mb-0'>Student Support</p>
                                    </div>
                                    <div className='d-flex flex-row align-items-center border shadow  rounded px-2 me-3' style={{width:"auto",height:"40px"}}>
                                        <SiFuturelearn className='fs-5'/>
                                        <p className=' ms-3 mb-0'>Portal</p>
                                    </div>
                                </div>
                                <div className='mt-5 d-none d-md-block'>
                                    <button  className='btn btn-primary'>Download Brochure</button>
                                    <button className='btn btn-danger ms-3'>Other Details</button>
                                </div>
                            </div>
                    </div>
                    <form className=" col-12 col-md-5 border-top border-4 border-primary shadow rounded p-3" onSubmit={onClickSubmit}>
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
                    <div className='mt-5 d-block d-md-none'>
                        <button  className='btn btn-primary'>Download Brochure</button>
                        <button className='btn btn-danger ms-3'>Other Details</button>
                    </div>
                    </div>
            </div>
        </div>
        <WhyChooseUs/>
    </div>
  )
}

export default Home