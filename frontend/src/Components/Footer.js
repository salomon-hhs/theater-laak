import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";

function Footer() {
    return <footer className="bg-white text-black">
        <div className="x-responsive flex flex-wrap justify-between py-8 flex-col sm:flex-row">
            <FooterSection title="Links">
                <FooterLink url="/evenementen" text="Evenementen" /><br />
                <FooterLink url="/doneer" text="Doneer" /><br/>
                <FooterLink url="/over-ons" text="Over Ons" />
            </FooterSection>
            
            <FooterSection title="Openingstijden">
                <p>Woensdag t/m zondag<br />12:00 tot 21:00</p>
            </FooterSection>
            
            <FooterSection title="Locatie">
                <p>Bekendeweg 13<br />Laakkwartier<br />2521TL, Den Haag</p>
            </FooterSection>

            <FooterSection title="Contact">
                <p>Telefoon: 070 - 445 88 88<br />Email: contact@theater-laak.nl</p>
            </FooterSection>
        </div>
        <div className="bg-gray-300 px-4 py-2">
            <div className="x-responsive">
                © {new Date().getFullYear()} Copyright
            </div>
        </div>
    </footer>
}

export default Footer;
