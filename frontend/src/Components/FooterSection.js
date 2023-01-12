function FooterSection({title, children}) {
    return <div className="m-4">
        <p className="font-bold text-xl mb-2">{title}</p>
        {children}
    </div>
}

export default FooterSection;
