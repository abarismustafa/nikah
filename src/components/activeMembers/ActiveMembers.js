import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginn, resiter } from "../../api/Api"
import { toastSuccessMessage, toastSuccessMessageError } from "../common/tostShow/TostShow"

function ActiveMembers() {
  const navigate = useNavigate()

  const [loadingSpin, setLoginSpin] = useState(false)

  const [initialValue, setInitialValue] = useState({

    email: '',
    password: '',
  })

  const [error, setError] = useState({})

  // console.log(error);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);



  const validation = (formData) => {
    const errorDta = {}
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
    navigate('/dashboard')
    const validateResult = validation(initialValue);

    // If there are errors, focus on the first one
    if (Object.keys(validateResult).length) {
      for (const key in validateResult) {
        if (validateResult.hasOwnProperty(key)) {
          switch (key) {
            case 'email':
              emailRef.current.focus();
              break;
            case 'password':
              passwordRef.current.focus();
              break;
            default:
              break;
          }
          break;
        }
      }
      return;
    }


    try {
      setLoginSpin(true)
      const res = await loginn(initialValue)
      // console.log(res?.data.error);
      if (res?.data?.error == false) {
        toastSuccessMessage(res?.data?.message)
        // setTimeout(() => {
        navigate('/dashboard')
        // }, 1000)
        setLoginSpin(false)
      } else {
        toastSuccessMessageError(res?.data?.message)
        setLoginSpin(false)
      }
    } catch (error) {
      // setLoginSpin(false)
    }
  }
  return (
    <>
      <div className="py-4 py-lg-5 resister" style={{ marginTop: "125px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-md-7 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="mb-5 text-center">
                    <h1 className="h3 text-primary mb-0">Login to your Account</h1>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input type="text" className="form-control" ref={emailRef} id="email" name='email' value={initialValue?.email} placeholder="Enter Name" onChange={changeHandle} />
                    {error?.email && <p style={{ color: 'red', margin: '0px' }}>
                      {error?.email}
                    </p>}
                    {/* <span className="opacity-60">Use country code before number</span> */}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="password">Password <span style={{ color: 'red' }}>*</span></label>
                    <input type="password" className="form-control" ref={passwordRef} id="exampleFormControlInput1" placeholder="Enter Password" name='password' value={initialValue.password} onChange={changeHandle} />
                    {error?.password && <p style={{ color: 'red', margin: '0px' }}>
                      {error?.password}
                    </p>}
                  </div>
                  <div className="mb-3 text-right">
                    <a className="link-muted text-capitalize font-weight-normal" href="#">Forgot Password?</a>
                  </div>
                  <div className="mb-5">
                    {/* <Link to='/member-listing' className="btn btn-block btn-primary">Login to your Account</Link> */}
                    <button type="buton" className="btn btn-block btn-primary" onClick={submitData}>Login to your Account</button>
                  </div>

                  {/* <div className="mb-5">
                    <table className="table table-bordered table-responsive">
                      <tbody>
                        <tr>
                          <td>user2@example.com</td>
                          <td>12345678</td>
                          <td className="text-center">
                            <button className="btn btn-outline-primary btn-xs" onClick={autoFill}>Copy credentials</button>
                          </td>
                        </tr>
                        <tr>
                          <td>user17@example.com</td>
                          <td>12345678</td>
                          <td className="text-center">
                            <button className="btn btn-outline-primary btn-xs" onClick={autoFill2}>Copy credentials</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}
                  <div className="separator mb-3">
                    <span className="bg-white px-3 opacity-60">Or Login With</span>
                  </div>
                  <ul className="list-inline social colored text-center mb-5">
                    <li className="list-inline-item">
                      <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/facebook" className="facebook">
                        <i className="lab la-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/google" className="google">
                        <i className="lab la-google" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/twitter" className="twitter">
                        <i className="lab la-twitter" />
                      </a>
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-muted mb-0">Don't have an account?</p>
                    <Link to="/register">Create an account</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default ActiveMembers