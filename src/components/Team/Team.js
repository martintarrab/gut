import Member from '../Member/Member';
import { useSelector } from "react-redux";
import { selectCurrentOffice } from "redux/app/selectors";

const Team = ({ content }) => {
  const { fields } = content;
  const currentOffice = useSelector(selectCurrentOffice);

  const showElement = () => {
    return currentOffice == fields.locale || fields.locale == 'all' ? true : false;
  }
  
  return (
    <>
    {showElement() &&
      <section className={fields.highlight ? 'team team--highlight' : 'team'}>
        <div className={`team__wrapper ${fields.spaceTop ? 'team__wrapper--space' : ''}`}>
          <h1 className="team__wrapper-title">{fields.title}{showElement()}</h1>
          <div className="team__wrapper-grid">
            {fields.members.map((member, idx) =>
              <Member key={idx} content={member.fields}></Member>
            )}
          </div>
        </div>
      </section>
    }
    </>
  )
}

export default Team;