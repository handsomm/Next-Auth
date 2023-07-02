import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '@/database/conn';
import Users from '@/model/Schema';
import { compare } from 'bcryptjs';
import axios from 'axios';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // CredentialsProvider({
        //     name: 'Credentials',
        //     async authorize(credentials, req) {
        //         connectMongo().catch((err) => {
        //             error: 'Connection error...';
        //         });

        //         const result = await Users.findOne({
        //             email: credentials.email
        //         });

        //         if (!result) {
        //             throw new Error('No user found....');
        //         }

        //         const checkPassword = await compare(
        //             credentials.password,
        //             result.password
        //         );
        //         if (!checkPassword || result.email !== credentials.email) {
        //             throw new Error('Username or password does not match');
        //         }
        //         throw new Error(result);

        //     },
        // }),
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                const result = await axios.post('http://localhost:5000/login', {
                    email: credentials.email,
                    password: credentials.password,
                });

                if (result === null) {
                    throw new Error('No user found....');
                }
                return result.data
            },
        }),
    ],
    secret: 'S+DYffry7VCiIzCFVF5hHdOiYJWtYJ1T5WUffjz7GzU=',
});
