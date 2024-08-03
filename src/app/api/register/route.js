import { NextResponse } from "next/server";


export const POST = async (request) => {
    const {name, email, password} = await request.json();

    console.log(name, email, password);

    // create a DB conection

    // Encrypt the password

    // Form a DB payload 

    // Update the DB

    return new NextResponse("User has been created", {
        status: 201
    })

}