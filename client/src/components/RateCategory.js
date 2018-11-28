import React from 'react';

const RateCategory = ({ categoryName, handleSelectChange, selectValue }) => {
  const firstLetterUpperCased =
    categoryName[0].toUpperCase() + categoryName.slice(1);
  return (
    <div>
      <label>
        {firstLetterUpperCased}
        <select
          value={selectValue}
          onChange={handleSelectChange}
          name={categoryName}
        >
          {makeOptions(1, 5, 0.5)}
        </select>
      </label>
    </div>
  );
};

function makeOptions(start, end, step) {
  const optionsArr = [<option key="option0" value="" />];

  for (let i = start; i <= end; i += step) {
    optionsArr.push(
      <option key={`option${i}`} value={i}>
        {i}
      </option>
    );
  }

  return optionsArr;
}

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
