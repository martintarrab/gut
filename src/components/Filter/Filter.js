import { useState } from 'react';
import { Visible } from 'react-grid-system';

const Filter = ({options, onChange, value}) => {
  const [current, setCurrent] = useState('Select');
  const [openFilter, setOpenFllter] = useState(false);

  const handleChangeSelect = (event) => {
    const { value } =  event.target;
    onChange(value);
  }

  const handlerFilterModal = () => {
    setOpenFllter(!openFilter);
  }

  const handlerSetFilter = (event) => {
    const current = event.target;
    const data = current.getAttribute('data-type');

    onChange(data);
    setCurrent(current.textContent);
  }

  return (
    <div className={`filter ${openFilter ? 'open' : ''}`}>
      <Visible xs sm>
        <label className="label">Filter by +</label>
        <select value={value} className="select" onChange={handleChangeSelect}>
          <option value={''}>Select</option>
          {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </Visible>
      <Visible md lg xl xxl>
        <label className="label" onClick={handlerFilterModal}>Filter by +</label>
        <button onClick={handlerFilterModal}>{current}</button>
        <div className="filter-modal" onMouseLeave={handlerFilterModal}>
          <div className="filter-modal__wrapper">
            <ul>
              {options.map((option) => (
                <li key={option.value}><a href={void(0)} onClick={handlerSetFilter} data-type={option.value}>{option.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </Visible>
    </div>
  )
}
export default Filter;
