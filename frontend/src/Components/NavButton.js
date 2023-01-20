function NavButton({url, text}) {
    return <span className="sm:place-self-center md:mx-2 py-4">
        <a href={url} className="
            border p-2 rounded
            hover:bg-white hover:text-black
            focus:bg-darkest"
        >
            {text}
        </a>
    </span>
}

export default NavButton;
