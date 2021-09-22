import Link from "next/link";
import { getCopy } from "static/copy";
import { useSelector } from "react-redux";
import { selectCurrentOffice } from "redux/app/selectors";

const Footer = ({ locale, content }) => {
  const { fields } = content;
  const localizedCopy = getCopy(locale);
  const currentOffice = useSelector(selectCurrentOffice);
  const currentYear = new Date().getFullYear();

  const showElement = () => {
    return currentOffice == fields.locale ? true : false;
  }

  return (
    <>
    {showElement() &&
      <footer className="ft">
        <div className="ft__content">
          <div className="ft__content-top">
            <ul className="ft__content-top-social">
              {fields?.twitter && <li><a href={fields?.twitter} target="_blank" rel="noreferrer">Twitter</a></li>}
              {fields?.instagram && <li><a href={fields?.instagram} target="_blank" rel="noreferrer">Instagram</a></li>}
              {fields?.vimeo && <li><a href={fields?.vimeo} target="_blank" rel="noreferrer">Vimeo</a></li>}
              {fields?.facebook && <li><a href={fields?.facebook} target="_blank" rel="noreferrer">Facebook</a></li>}
              {fields?.linkedin && <li><a href={fields?.linkedin} target="_blank" rel="noreferrer">Linkedin</a></li>}
            </ul>
            <div className="ft__content-top-office">
              <p>{fields.title} Office</p>
            </div>
            <div className="ft__content-top-address">
              {fields.address && <p>{fields.address}</p>}
              {fields.phone && <p className="ft__content-top-address-phone"><a href={`tel:${fields.phone}`}>{fields.phone}</a></p>}
            </div>
            <div className="ft__content-top-links">
              <p><Link href="/contact-us">Join Us</Link></p>
            </div>
            <div className="ft__content-top-emails">
              {fields.general && <p><a href={`mailto:${fields.general}`}>{fields.general}</a></p>}
              {fields.join && <p><a href={`mailto:${fields.join}`}>{fields.join}</a></p>}
              {fields.work && <p><a href={`mailto:${fields.work}`}>{fields.work}</a></p>}
              {fields.press && <p><a href={`mailto:${fields.press}`}>{fields.press}</a></p>}
            </div>
          </div>
          <div className="ft__content-bottom">
            <Link href="/privacy-policy"><a className="ft__content-bottom-privacy">{localizedCopy.privacy}</a></Link>
            <small className="ft__content-bottom-copy">©{currentYear} GUT AGENCY</small>
            <small className="ft__content-bottom-rights">{localizedCopy.rights}</small>
          </div>
        </div>
      </footer>
    }
    </>
  )
};

export default Footer;
