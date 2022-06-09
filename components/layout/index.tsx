import { UserProvider } from "@auth0/nextjs-auth0";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }:any) {
    return (
        <>
            <UserProvider>
            <Header />
            <main>{children}</main>
            </UserProvider>
        </>
    )
}