import Head from 'next/head';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import styles from '@/styles/Form.module.css';
import { HiFingerPrint, HiAtSymbol, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import { register_validate } from '@/lib/validate';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Register() {
    const [show, setShow] = useState({
        password: false,
        cpassword: false,
    });

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: '',
        },
        onSubmit,
        validate: register_validate,
    });

    async function onSubmit(values) {
        const credentials = {
            username: values.username,
            email: values.email,
            password: values.password,
            cpassword: values.cpassword,
        };
        await axios
            .post('http://localhost:5000/register', credentials)
            .then((data) => {
                if (data) router.push('/login');
            });
    }

    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className='title'>
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>
                        Register
                    </h1>
                </div>
                {/* form */}
                <form
                    className='flex flex-col gap-5'
                    onSubmit={formik.handleSubmit}
                >
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.username &&
                            formik.touched.username ? (
                                'border-rose-600'
                            ) : (
                                <></>
                            )
                        }`}
                    >
                        <input
                            className={styles.input_text}
                            type='text'
                            name='username'
                            placeholder='Username'
                            {...formik.getFieldProps('username')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.email && formik.touched.email ? (
                                'border-rose-600'
                            ) : (
                                <></>
                            )
                        }`}
                    >
                        <input
                            className={styles.input_text}
                            type='email'
                            name='email'
                            placeholder='Email'
                            {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.password &&
                            formik.touched.password ? (
                                'border-rose-600'
                            ) : (
                                <></>
                            )
                        }`}
                    >
                        <input
                            className={styles.input_text}
                            type={`${show.password ? 'text' : 'password'}`}
                            name='password'
                            placeholder='Password'
                            {...formik.getFieldProps('password')}
                        />
                        <span
                            onClick={() =>
                                setShow({ ...show, password: !show.password })
                            }
                            className='icon flex items-center px-4'
                        >
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.cpassword &&
                            formik.touched.cpassword ? (
                                'border-rose-600'
                            ) : (
                                <></>
                            )
                        }`}
                    >
                        <input
                            className={styles.input_text}
                            type={`${show.cpassword ? 'text' : 'password'}`}
                            name='cpassword'
                            placeholder='Confirm Password'
                            {...formik.getFieldProps('cpassword')}
                        />
                        <span
                            onClick={() =>
                                setShow({ ...show, cpassword: !show.cpassword })
                            }
                            className='icon flex items-center px-4'
                        >
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div className='input-button'>
                        <button className={styles.button} type='submit'>
                            Login
                        </button>
                    </div>
                </form>
                {/* bottom */}
                <p className='text-center text-gray-400'>
                    Have an account yet ?{' '}
                    <Link href={'/login'} className='text-blue-700'>
                        Sign In
                    </Link>
                </p>
            </section>
        </Layout>
    );
}
