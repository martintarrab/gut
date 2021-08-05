import { extractMediaAssetSrc } from "contentful/utils";
import Image from 'next/image'
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import facebook from './assets/facebook.png';
import linkedin from './assets/linkedin.png';

const Offices = ({content: {fields: { cards, title }}}) => {
    return (
        <div className="offices">
            <h1 className="title">{title}</h1>
            <div className="cards">
                {cards.map((card) => { 
                    const { fields: { id, address, officeName, emails=[], image }} = card;
                    return (
                        <div key={id} className="card" style={{backgroundImage: `url(${extractMediaAssetSrc(image)}`}}>
                            <div className="location">
                                {`GUT  — `}
                                <span>{officeName}</span>
                            </div>
                            <div className="address">
                                {address}
                            </div>
                            <div className="contact">
                                {emails.map((email) => <a key={email} href={`mailto:${email}`}>{email}</a>)}
                            </div>
                            <div className="social">
                                <a href="https://www.instagram.com/gutbuenosaires/" target="_blank">
                                    <Image src={instagram} alt="instagram" />
                                </a>
                                <a href="https://twitter.com/gutbuenosaires" target="_blank">
                                    <Image src={twitter} alt="twitter" />
                                </a>
                                <a href="https://www.facebook.com/gutbuenosaires" target="_blank">
                                    <Image src={facebook} alt="facebook" />
                                </a>
                                <a href="https://www.linkedin.com/company/gutagency" target="_blank">
                                    <Image src={linkedin} alt="linkedin" s/>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Offices;
