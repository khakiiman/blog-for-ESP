/* eslint-disable react/prop-types */
const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className='block w-3/5 h-[42px] rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 text-sm sm:text-lg focus:border-primary-500 focus:ring-primary-500'
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map((i) => {
        return (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
