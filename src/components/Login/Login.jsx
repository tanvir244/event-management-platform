import React from 'react';

const Login = () => {
    return (
        <div className="w-[620px] mx-auto bg-[#0d1b2a] text-white rounded-lg px-12 py-16">
            <h1 className="text-center font-semibold text-5xl mb-12">Please Login</h1>
            <form >
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Email</span>
                        <input type="email" name="email" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter email" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-base font-semibold">Password</span>
                        <input type="password" name="password" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter password" />
                    </div>
                </div>
                <button className="w-full py-2 bg-white text-black mt-8 rounded-lg font-semibold">Login</button>
                {/* {
                    registerErr && <p className="text-red-600 font-semibold mt-4 text-center">{registerErr}</p>
                } */}
            </form>
        </div>
    );
};

export default Login;