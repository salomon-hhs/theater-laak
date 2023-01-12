function FooterLink({url, text}) {
    return <a href={url} className="uppercase text-red-800 hover:text-black">
        {text}
    </a>
}

export default FooterLink;
