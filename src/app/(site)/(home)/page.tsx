"use client"

import { Button } from '@/shared/ui/button';
import Container from '@/shared/ui/container';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';


export const Home: React.FC = () => {
    const session = useSession()
    console.log(session);

    return (
        <div >
            <Container>
                {session.data?.user?.image ?
                    <img src={session.data.user.image} width={70} height={70} alt="google" /> :
                    null}
                {session.data?.user?.name}
                <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</Button>
                <Link href="/auth/login">SignIn</Link>

            </Container>
        </div>
    );
};
export default Home