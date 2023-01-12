import NavLink from "./NavLink";
import NavButton from "./NavButton";

function Header() {
    return <header className="bg-dark text-white">
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
                <NavButton url="/inloggen" text="Inloggen"/>
                <NavButton url="/registreren" text="Registreren"/>
            </nav>
        </div>    
    </header>
}

export default Header;
