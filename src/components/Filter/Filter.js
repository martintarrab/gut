const Filter = ({options, onChange, value}) => {
    const handleChangeSelect = (event) => {
        const { value } =  event.target;
        onChange(value);
    }

    return (
        <div className="filter">
            <label className="label">
                <select value={value} className="select" onChange={handleChangeSelect}>
                    <option value={''}>Filter by +</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}
export default Filter;
