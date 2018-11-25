import React from 'react';

const RateCategory = ({ categoryName, handleSelectChange, selectValue }) => {
  const firstLetterLowerCased =
    categoryName[0].toLowerCase() + categoryName.slice(1);
  return (
    <div>
      <label>
        {categoryName}
        <select
          value={selectValue}
          onChange={handleSelectChange}
          name={firstLetterLowerCased}
        >
          {makeOptions(1, 5, 0.5)}
        </select>
      </label>
    </div>
  );
};

const makeOptions = (start, end, step) => {
  const optionsArr = [];

  for (let i = start; i > end; i += step) {
    optionsArr.push(<option value={i}>{i}</option>);
  }

  return optionsArr;
};

// too verbose and not easily readable
// const makeOptions = (start, end, step, optionsArr) => {
//   return start >= end
//     ? optionsArr
//     : makeOptions(start + step, end, step, [
//         ...optionsArr,
//         <option value={start}>{start}</option>
//       ]);
// };

export default RateCategory;
