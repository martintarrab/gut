import { extractMediaAssetSrc } from "contentful/utils";
import Image from 'next/image'
import instagramIcon from './assets/instagram.png';
import twitterIcon from './assets/twitter.png';
import facebookIcon from './assets/facebook.png';
import linkedinIcon from './assets/linkedin.png';

const Offices = ({content: {fields: { cards, title }}}) => {
    return (
        <div className="offices">
            <h1 className="title">{title}</h1>
            <div className="cards">
                {cards.map((card) => {
                    const { fields: { id, address, officeName, emails=[], image, instagram, linkedin, twitter, facebook }} = card;

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
                                {instagram && <a href={instagram} target="_blank">
                                    <Image src={instagramIcon} alt="instagram" />
                                </a>}
                                {twitter && <a href={twitter} target="_blank">
                                    <Image src={twitterIcon} alt="twitter" />
                                </a>}
                                {facebook && <a href={facebook} target="_blank">
                                    <Image src={facebookIcon} alt="facebook" />
                                </a>}
                                {linkedin && <a href={linkedin} target="_blank">
                                    <Image src={linkedinIcon} alt="linkedin" />
                                </a>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Offices;
