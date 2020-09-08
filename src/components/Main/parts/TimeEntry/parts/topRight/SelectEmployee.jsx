import React, { useState, useRef } from 'react';

import Select, { components } from 'react-select';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { colourOptions } from './helperSelectEmployee';
// import css from './SelectEmployee.module.scss';

// const selectAllOption = {
//   value: '<SELECT_ALL>',
//   label: 'All users',
// };

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}

const SortableMultiValue = SortableElement(props => {
  // this prevents the menu from being opened/closed when the user clicks
  // on a value to begin dragging it. ideally, detecting a click (instead of
  // a drag) would still focus the control and toggle the menu, but that
  // requires some magic with refs that are out of scope for this example
  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});
const SortableSelect = SortableContainer(Select);

const SelectEmployee = () => {
  const [selected, setSelected] = useState([]);

  // const valueRef = useRef(props.value);
  // valueRef.current = props.value;

  // const isSelectAllSelected = () =>
  //   valueRef.current.length === props.options.length;

  // const isOptionSelected = option =>
  //   valueRef.current.some(({ value }) => value === option.value) ||
  //   isSelectAllSelected();

  // const getOptions = () => [selectAllOption, ...props.options];

  const onChange = selectedOptions => setSelected(selectedOptions);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
    console.log(
      'Values sorted:',
      newValue.map(i => i.value),
    );
  };

  // const getOptions = () => [selectAllOption, ...colourOptions];
  return (
    <>
      <SortableSelect
        // className={css.select}
        axis="xy"
        onSortEnd={onSortEnd}
        distance={4}
        getHelperDimensions={({ node }) => node.getBoundingClientRect()}
        isMulti
        options={colourOptions}
        // options={getOptions()}
        value={selected}
        onChange={onChange}
        components={{
          MultiValue: SortableMultiValue,
        }}
        closeMenuOnSelect={false}
        // menuPosition="absolute"
        // isOptionSelected={isOptionSelected}
        // inputValue="select user"
      />
    </>
  );
};

export default SelectEmployee;
