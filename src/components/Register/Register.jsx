"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Register = () => {

    const router = useRouter()

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);

            const name = formData.get('name');
            const email = formData.get('email');
            const password = formData.get('password');

            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            response.status === 201 && router.push('/login');

        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <div className="w-[620px] mx-auto bg-[#0d1b2a] text-white rounded-lg px-12 py-16">
            <h1 className="text-center font-semibold text-5xl mb-12">Register Now</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Name</span>
                        <input type="text" name="name" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Email</span>
                        <input type="email" name="email" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter email" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Password</span>
                        <input type="password" name="password" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter password" />
                    </div>
                    {/* <div className="space-y-2">
                        <span className="text-base font-semibold">Profile</span>
                        <div className='bg-white rounded-lg'>
                            <input type="file" name="pin" className="text-base text-black font-semibold p-2 rounded-md" />
                        </div>
                    </div> */}
                </div>
                <button className="w-full py-2 bg-white text-black mt-8 rounded-lg font-semibold">Register</button>
                {/* {
                    registerErr && <p className="text-red-600 font-semibold mt-4 text-center">{registerErr}</p>
                } */}
            </form>
        </div>
    );
};

export default Register;