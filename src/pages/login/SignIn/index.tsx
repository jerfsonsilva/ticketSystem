import { Col, Container, Row } from 'react-bootstrap'
import '../login.css'
import logo from '../../../assets/logo.png'
import { FaSignInAlt } from 'react-icons/fa'
import { BiLockAlt, BiUserCircle } from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginService from '../../../services/LoginService'
import { toast } from 'react-toastify'
import Loading from '../../../components/Loading/Loading'

type FormType = {
    email: string,
    password: string
}
function SignIn() {
    let [loading, setLoading] = useState(false)
    const [form, setForm] = useState<FormType>({
        email: '',
        password: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (event: { preventDefault: Function }) => {
        event.preventDefault()
        setLoading(true)
        LoginService.signInEmailAndPassword({
            ...form
        }).then(() => {
            toast.success('Logged in user');
        }).catch((err) => {
            toast.error(`Something went wrong :(  ${err.message}`);
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            {loading ? <Loading /> :
                <Container className="d-flex justify-content-center ">
                    <Row className="content-login">
                        <Col sm={12}>
                            <h2 className='text-center'>
                                <img src={logo} className='mr-3' style={{
                                    height: '30px'
                                }} />
                                JerfTicket

                            </h2>

                        </Col>
                        <Col sm={12}>
                            <form onSubmit={handleSubmit}>
                                <Col sm={12} className="icon-input-group">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" value={form.email} onChange={handleChange} required id="email" className='form-control' />
                                    <BiUserCircle />
                                </Col>
                                <Col sm={12} className="icon-input-group">
                                    <label htmlFor="password">Password</label>
                                    <input name="password" value={form.password} onChange={handleChange} required type="password" id="password" className='form-control' />
                                    <BiLockAlt />
                                </Col>
                                <Col sm={12} className='text-left register'>
                                    <Link to="/register" className='fs-14'>
                                        Don't you have an account? register a new
                                    </Link>
                                </Col>
                                <Col sm={12} className='text-right mt-2'>
                                    <button className='btn btn-info' type='submit'>Login <FaSignInAlt /> </button>
                                </Col>
                            </form>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default SignIn