import { Col, Container, Row } from 'react-bootstrap'
import '../login.css'
import logo from '../../../assets/logo.png'
import { BiSave } from 'react-icons/bi'
import { BiLockAlt, BiUserCircle } from 'react-icons/bi'
import { HiOutlineIdentification } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import LoginService from '../../../services/LoginService'
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading/Loading'

type FormType = {
    name: string,
    email: string,
    password: string
}
function SignUp() {
    let [loading, setLoading] = useState(false)

    const [form, setForm] = useState<FormType>({
        email: '',
        password: '',
        name: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (event: { preventDefault: Function }) => {
        setLoading(true)
        event.preventDefault()
        LoginService.createNewAuth({
            ...form
        }).then((data) => {
            toast.success('User created');
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
                            <h2 className='text-center'>Register</h2>
                        </Col>
                        <Col sm={12}>
                            <form onSubmit={handleSubmit}>
                                <Col sm={12} className="icon-input-group">
                                    <label htmlFor="name">Name</label>
                                    <input name="name" value={form.name} onChange={handleChange} className='form-control' />
                                    <HiOutlineIdentification />
                                </Col>
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
                                    <Link to="/" className='fs-14'>
                                        Do you have an account? sign in
                                    </Link>
                                </Col>
                                <Col sm={12} className='text-right mt-2'>
                                    <button className='btn btn-info' type='submit'>Create <BiSave /> </button>
                                </Col>
                            </form>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default SignUp