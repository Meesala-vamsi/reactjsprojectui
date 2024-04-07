import React from 'react'

const Modal = ({formDetails}) => {
  return (
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Request Call Back
        </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p className='fw-bold'>Name: <span className='fw-normal'>{formDetails.getUsername}</span></p>
                    <p className='fw-bold'>MailId: <span className='fw-normal'>{formDetails.getMail}</span></p>
                    <p className='fw-bold'>Gender: <span className='fw-normal'>{formDetails.getGender}</span></p>
                    <p className='fw-bold'>Studying: <span className='fw-normal'>{formDetails.getQualification}</span></p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal