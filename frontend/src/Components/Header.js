import NavLink from "./NavLink";
import NavButton from "./NavButton";
import {useEffect, useState} from "react";

function Header() {
    const [user, setUser] = useState("");

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = loggedInUser;
            setUser(foundUser);
        }
    }, []);

    const logout = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    let content;
    if (user !== "") content =
        <>
            <span className="sm:place-self-center md:mx-2 py-4">{user}</span>
            <button
            className=
                "sm:place-self-center md:mx-2 py-4
                border p-2 rounded
                hover:bg-white hover:text-black
                focus:bg-darkest"
            onClick={logout}>
                log uit
            </button>
        </>
    else content =
        <>
            <NavButton url="/inloggen" text="Inloggen"/>
            <NavButton url="/registreren" text="Registreren"/>
        </>

    return(
    <header className="bg-dark text-white">
        <div className="x-responsive flex flex-col min-[1000px]:flex-row">
            <div className="self-center py-4 flex-grow">
                <a href="/" className="
                    font-logo text-xl lg:text-2xl px-2 rounded
                    hover:font-bold hover:bg-white hover:text-black
                    focus:font-bold focus:bg-white focus:text-black"
                >
                    Theater Laak
                </a>
            </div>
            <nav className="flex flex-wrap flex-col sm:flex-row justify-between">
                <NavLink url="/evenementen" text="Evenementen"/>
                <NavLink url="/doneren" text="Doneer"/>
                <NavLink url="/over-ons" text="Over Ons"/>
                {content}
            </nav>
        </div>    
    </header>
    )
}

export default Header;
