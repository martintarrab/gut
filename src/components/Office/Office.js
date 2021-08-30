import { extractMediaAssetSrc } from "contentful/utils";
import { getCopy } from "static/copy";

const Office = ({ content, locale }) => {
  const { fields } = content;
  const localizedCopy = getCopy(locale);

  const instagram = (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.8463 9.0602C32.5275 4.35885 28.7412 0.572638 24.0399 0.253354C21.5574 0.0854188 19.0375 0 16.5496 0C14.0617 0 11.5414 0.0854188 9.05927 0.253768C4.3575 0.572638 0.571705 4.35885 0.252836 9.06061C-0.0842785 14.0307 -0.0842785 19.0712 0.252836 24.0412C0.571705 28.743 4.35792 32.5288 9.05927 32.8477C11.5418 33.016 14.0617 33.1014 16.5496 33.1014C19.0375 33.1014 21.5574 33.016 24.0399 32.8477C28.7417 32.5288 32.5275 28.743 32.8463 24.0412C33.1834 19.0708 33.1834 14.0302 32.8463 9.0602ZM16.5496 22.3125C13.3725 22.3125 10.7875 19.728 10.7875 16.5509C10.7875 13.3738 13.3725 10.7889 16.5496 10.7889C19.7267 10.7889 22.3116 13.3738 22.3116 16.5509C22.3116 19.728 19.7267 22.3125 16.5496 22.3125ZM25.4746 9.61625C24.3778 9.61625 23.4884 8.72681 23.4884 7.63005C23.4884 6.53329 24.3778 5.64386 25.4746 5.64386C26.5714 5.64386 27.4608 6.53329 27.4608 7.63005C27.4608 8.72681 26.5714 9.61625 25.4746 9.61625Z" fill="white" />
    </svg>
  )

  const twitter = (
    <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.236 7.92938C34.236 11.5506 33.0348 20.8326 25.5001 26.588C17.8211 32.4562 5.96365 32.2659 0.0996094 27.4604C5.03068 28.2056 9.39865 26.2762 11.1472 24.3414C7.65295 24.5927 4.47006 20.6609 4.2192 18.9758C5.40345 19.3481 6.53255 19.0363 7.09275 18.7245C4.71595 18.1701 1.34854 15.4786 1.40908 11.0513C2.16002 11.6783 3.90738 12.2368 4.8416 11.8628C1.53763 10.1154 0.542875 4.37289 2.5357 1.56775C4.28554 4.99404 12.7055 9.86747 18.5708 9.74349C17.8211 2.43645 23.1266 0.0683594 26.2452 0.0683594C29.3696 0.0683594 31.6138 1.7531 31.9894 2.68939C33.6729 2.68939 36.4801 1.31896 36.9164 0.755856C36.9164 2.50279 34.7332 4.31359 33.5489 4.87379C35.2963 4.81035 37.0432 4.24973 37.8518 3.81393C37.3551 5.56129 35.2337 7.43386 34.236 7.92938Z" fill="white" />
    </svg>
  )

  const facebook = (
    <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0858 33.1011C12.0767 32.9953 12.0597 32.8892 12.0597 32.7834C12.0584 27.9519 12.0584 23.1208 12.0593 18.2892C12.0593 18.1743 12.0688 18.0595 12.0754 17.9061C12.2231 17.9061 12.3483 17.9061 12.4735 17.9061C14.4448 17.9061 16.4156 17.9011 18.3869 17.9119C18.6722 17.9135 18.7717 17.848 18.7696 17.5408C18.7555 15.5376 18.7626 13.5344 18.7613 11.5312C18.7613 11.4275 18.7501 11.3238 18.7422 11.18C16.5081 11.18 14.2976 11.18 12.0916 11.18C12.0916 10.1226 12.041 9.10378 12.109 8.09285C12.1567 7.38421 12.6883 6.67266 13.6876 6.70625C15.2604 6.75933 16.8365 6.7162 18.4114 6.72449C18.6589 6.72574 18.77 6.68054 18.7684 6.39319C18.7559 4.36843 18.7622 2.34409 18.7613 0.319329C18.7613 0.226032 18.7493 0.13232 18.7406 0.00128932C18.6087 0.00128932 18.4943 0.00128932 18.3798 0.00128932C16.7731 0.00128932 15.1659 0.00543587 13.5591 4.5361e-05C12.07 -0.00493049 10.7125 0.399357 9.49504 1.26433C7.47568 2.69903 6.30677 4.68108 5.93109 7.09229C5.75279 8.23632 5.82453 9.41892 5.78513 10.5845C5.77891 10.774 5.7843 10.9643 5.7843 11.1965C4.13024 11.1965 2.51061 11.1965 0.883094 11.1965C0.871899 11.3118 0.858216 11.3852 0.858216 11.4586C0.856972 13.5049 0.861939 15.5508 0.851573 17.5971C0.850329 17.8704 0.964366 17.9115 1.19574 17.9102C2.58815 17.9032 3.98097 17.9065 5.3738 17.9065C5.49944 17.9065 5.62508 17.9065 5.78555 17.9065C5.78555 22.9943 5.78555 28.0477 5.78555 33.1011H12.0858Z" fill="white" />
    </svg>
  )

  const linkedin = (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.77717 0C2.56374 0 0.769531 1.79421 0.769531 4.00763C0.769531 6.22106 2.56374 8.01527 4.77717 8.01527C6.99059 8.01527 8.7848 6.22106 8.7848 4.00763C8.78438 1.79421 6.99018 0 4.77717 0ZM1.32268 33.101H8.19889V11.0207H1.32268V33.101ZM33.9477 20.3939C33.9477 12.671 30.5732 10.4679 25.7185 10.4679C22.3904 10.4679 20.2206 12.3053 19.0666 14.1136V11.0211H12.4665V33.1014H19.3427V22.0609C19.3427 18.4152 20.6041 16.4804 23.4374 16.4804C26.2708 16.4804 27.0711 18.4845 27.0711 21.4907V33.101H33.9473V20.5233L33.9448 20.5225C33.9456 20.4785 33.9477 20.4387 33.9477 20.3939Z" fill="white" />
    </svg>
  )

  return (
    <section className="office">
      <div className="office__wrapper">
        <div className="office__wrapper-image">
          <div className="office__wrapper-eyebrow">
            <span>{localizedCopy.office}</span>
          </div>
          <div className="office__wrapper-image-element">
            <img src={extractMediaAssetSrc(fields.image)} alt="" />
          </div>
        </div>
        <div className="office__wrapper-data">
          <div className="office__wrapper-eyebrow">
            <span>{localizedCopy.office}</span>
          </div>
          <h1 className="office__wrapper-data-title">{fields.officeName}</h1>
          <p className="office__wrapper-data-address">{fields.address}</p>
          {fields.emails && <div className="office__wrapper-data-emails">
            {fields.emails.map((email, idx) => (
              <div className="office__wrapper-data-emails-item" key={idx}><a href={`mailto:${email}`}>{email}</a></div>
            ))}
          </div>}
          <ul className="office__wrapper-data-social">
            {fields.instagram && <li><a href={fields.instagram} target="_blank" aria-label="Visit us on Instagram">{instagram}</a></li>}
            {fields.twitter && <li><a href={fields.twitter} target="_blank" aria-label="Visit us on Twitter">{twitter}</a></li>}
            {fields.facebook && <li><a href={fields.facebook} target="_blank" aria-label="Visit us on Facebook">{facebook}</a></li>}
            {fields.linkedin && <li><a href={fields.linkedin} target="_blank" aria-label="Visit us on Linkedin">{linkedin}</a></li>}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Office;
