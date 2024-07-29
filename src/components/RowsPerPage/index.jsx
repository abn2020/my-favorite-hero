const Select = ({ limit, onChange, options}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
            <select
              value={limit}
              style={{ height: "36px", width: "65px" }}
              onChange={(e) => onChange(e.target.value)}
            >
              {options.map((arr, key) => (
                <option key={key}>
                  {arr.value}
                </option>
              ))}
            </select>
            <div style={{ fontSize: "13px" }}>Itens por página</div>
        </div>
    )}

    export default Select;