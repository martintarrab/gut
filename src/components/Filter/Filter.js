import NavItem from "components/NavItem";
import { Visible } from 'react-grid-system';

const Filter = ({options, onChange, value}) => {
    const handleChangeSelect = (event) => {
        const { value } =  event.target;
        onChange(value);
    }

    const handleClick = (value) => () => {
        onChange(value);
    }

    
    const getSubItems = () => (
        <ul className="options-desktop">
            {options.map((option) => (
                <li key={option.value} onClick={handleClick(option.value)}>{option.label}</li>
            ))}
        </ul>
    )

    return (
        <div className="filter">
            <Visible xs sm>
                <label className="label">
                    <select value={value} className="select" onChange={handleChangeSelect}>
                        <option value={''}>Filter by +</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </label>
            </Visible>
            <Visible md lg xl xxl>
                <NavItem subItems={getSubItems()} label="Filter by" />
            </Visible>
        </div>
    )
}
export default Filter;
