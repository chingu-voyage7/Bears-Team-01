import React from 'react';

const RateCategory = ({ categoryName, handleSelectChange, selectValue }) => {
  const firstLetterUpperCased =
    categoryName[0].toUpperCase() + categoryName.slice(1);
  return (
    <div className="form-group col-md-2 m-0">
      <label
        htmlFor={categoryName}
      >{firstLetterUpperCased}</label>
      <select
        id={categoryName}
        defaultValue="choose"
        //value={selectValue}
        onChange={handleSelectChange}
        name={categoryName}
        className="form-control"  
      >
        {makeOptions(1, 5, 0.5)}
      </select>
    </div>
  );
};

function makeOptions(start, end, step) {
  const optionsArr = [<option key="disabled_option" disabled value="choose">Choose</option>];

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
