function NavLink({url, text}) {
    return <a href={url} className="
    sm:place-self-center p-4 sm:px-2
        hover:bg-white hover:text-black hover:underline
        focus:bg-darkest"
    >
        {text}
    </a>
}

export default NavLink;
