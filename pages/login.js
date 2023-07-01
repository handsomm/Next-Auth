import Head from 'next/head';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import styles from '@/styles/Form.module.css';
import Image from 'next/image';
import { HiFingerPrint, HiAtSymbol } from 'react-icons/hi';
import { useState } from 'react';

export default function Login() {
    const [show, setShow] = useState(false);

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className='title'>
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>
                        Explore
                    </h1>
                    <p className='w-3/4 mx-auto text-gray-400'>
                        Lorem Ipsum is simply dummy.
                    </p>
                </div>
                {/* form */}
                <form className='flex flex-col gap-5'>
                    <div className={styles.input_group}>
                        <input
                            className={styles.input_text}
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                        <span className='icon flex items-center px-4'>
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            className={styles.input_text}
                            type={`${show ? 'text' : 'password'}`}
                            name='password'
                            placeholder='Password'
                        />
                        <span
                            onClick={() => setShow(!show)}
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
                    <div className='input-button'>
                        <button className={styles.button_custom} type='button'>
                            <Image
                                src={'/assets/google.svg'}
                                width={20}
                                height={20}
                            />
                            Sign In with Google
                        </button>
                    </div>
                    <div className='input-button'>
                        <button className={styles.button_custom} type='button'>
                            <Image
                                src={'/assets/github.svg'}
                                width={20}
                                height={20}
                            />
                            Sign In with Github
                        </button>
                    </div>
                </form>
                {/* bottom */}
                <p className='text-center text-gray-400'>
                    Don't have an account yet ?{' '}
                    <Link href={'/register'} className='text-blue-700'>
                        Sign Up
                    </Link>
                </p>
            </section>
        </Layout>
    );
}
