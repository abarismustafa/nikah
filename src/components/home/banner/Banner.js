import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../../assets/img/banner/banner-1.jpg'
import banner2 from '../../../assets/img/banner/banner-2.jpg'
import banner3 from '../../../assets/img/banner/banner-3.jpg'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { toastSuccessMessage, toastSuccessMessageError } from '../../common/tostShow/TostShow'
import { loginn, resiter } from '../../../api/Api'
import { Spinner } from 'react-bootstrap'
function Banner() {
    const navigate = useNavigate()

    const [loadingSpin, setLoginSpin] = useState(false)

    const [initialValue, setInitialValue] = useState({
        name: '',
        contact: '',
        city: '',
        state: '',
        religion: "",
        email: '',
        password: '',
    })

    const [error, setError] = useState({})

    // console.log(error);
    const nameRef = useRef(null);
    const contactRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const religionRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const validation = (formData) => {
        const errorDta = {}
        if (!formData?.name) {
            errorDta.name = 'Name is Required !'
        }
        if (!formData?.contact) {
            errorDta.contact = 'Contact No is Required !'
        }
        if (!formData?.city) {
            errorDta.city = 'City is Required !'
        }
        if (!formData?.state) {
            errorDta.state = 'State is Required !'
        }
        if (!formData?.religion) {
            errorDta.religion = 'Religion is Required !'
        }
        if (!formData?.email) {
            errorDta.email = 'Email is Required!'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(formData.email)) {
                errorDta.email = 'Invalid Email Format!'
            }
        }
        if (!formData?.password) {
            errorDta.password = 'Password is Required !'
        }
        setError(errorDta)
        return errorDta
    }

    const changeHandle = (e) => {
        const clone = { ...initialValue }
        const name = e.target.name
        const value = e.target.value
        clone[name] = value
        setInitialValue(clone)
    }

    const submitData = async () => {
        console.log(initialValue);
        const validateResult = validation(initialValue);

        // If there are errors, focus on the first one
        if (Object.keys(validateResult).length) {
            for (const key in validateResult) {
                if (validateResult.hasOwnProperty(key)) {
                    switch (key) {
                        case 'name':
                            nameRef.current.focus();
                            break;
                        case 'contact':
                            contactRef.current.focus();
                            break;
                        case 'city':
                            cityRef.current.focus();
                            break;
                        case 'state':
                            stateRef.current.focus();
                            break;
                        case 'religion':
                            religionRef.current.focus();
                            break;
                        case 'email':
                            emailRef.current.focus();
                            break;
                        case 'password':
                            passwordRef.current.focus();
                            break;
                        default:
                            break;
                    }
                    break; // Exit the loop after focusing on the first error
                }
            }
            return; // Stop further execution if there are validation errors
        }

        console.log(initialValue);
        try {
            setLoginSpin(true)
            const res = await resiter(initialValue)
            console.log(res?.data?.token);
            if (res?.error == false) {
                window.localStorage.setItem('userToken', res?.data?.token)
                toastSuccessMessage(res?.message)
                setTimeout(() => {
                    navigate('/admin/dashboard')
                }, 1000)
                setLoginSpin(false)
            } else {
                toastSuccessMessageError(res?.message)
                setLoginSpin(false)
            }


        } catch (error) {
            // setLoginSpin(false)
        }
    }
    return (
        <>

            <section className='resister' style={{ marginTop: '130px' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='formresiter'>
                                <div className='row'>
                                    <div className="col-lg-12">
                                        <h2 style={{ textAlign: 'center' }}>Create Your Account</h2>
                                        <p style={{ textAlign: 'center' }}>Fill out the form to get started.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" className="form-control" ref={nameRef} id="name" placeholder="Enter Name" name='name' value={initialValue.name} onChange={changeHandle} />
                                            {error?.name && <p style={{ color: 'red', margin: '0px' }}>
                                                {error?.name}
                                            </p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="contactno" className="form-label">Contact No. <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" className="form-control" ref={contactRef} id="contactno" placeholder="Enter Contact No" name='contact' value={initialValue.contact} onChange={changeHandle} />
                                            {error?.contactno && <p style={{ color: 'red', margin: '0px' }}>
                                                {error?.contactno}
                                            </p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="city" className="form-label">City <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" className="form-control" ref={cityRef} id="city" placeholder="Enter City" name='city' value={initialValue.city} onChange={changeHandle} />
                                            {error?.city && <p style={{ color: 'red', margin: '0px' }}>
                                                {error?.city}
                                            </p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">State <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" className="form-control" ref={stateRef} id="exampleFormControlInput1" placeholder="Enter State" name='state' value={initialValue.state} onChange={changeHandle} />
                                            {error?.state && <p style={{ color: 'red', margin: '0px' }}>
                                                {error?.state}
                                            </p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Religion <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" className="form-control" ref={religionRef} id="exampleFormControlInput1" placeholder="Enter Religion" name='religion' value={initialValue.religion} onChange={changeHandle} />
                                            {error?.religion && <p style={{ color: 'red', margin: '0px' }}>
                                                {error?.religion}
                                            </p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" className="form-control" ref={emailRef} id="email" name='email' value={initialValue?.email} placeholder="Enter Name" onChange={changeHandle} />
                                            {error?.email && <p style={{ color: 'red', margin: '0px' }}>
                                                {error?.email}
                                            </p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Password <span style={{ color: 'red' }}>*</span></label>
                                            <input type="password" className="form-control" ref={passwordRef} id="exampleFormControlInput1" placeholder="Enter Password" name='password' value={initialValue.password} onChange={changeHandle} />
                                            {error?.password && <p style={{ color: 'red', margin: '0px' }}>
                                                {error?.password}
                                            </p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <button type='button' style={{ width: '100%' }} className='btn btn-success' onClick={submitData}>

                                                {loadingSpin ? <Spinner animation="border" style={{ textAlign: 'center' }} variant="success" /> : 'Resister'}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner