import React, { FC } from 'react'
import { typesOfIncidents } from '../utils/types';

interface IProps {
    checkedState: boolean[],
    setCheckedState: Function,
}

const TypeCheckboxes: FC<IProps> = (props: IProps):JSX.Element => {

    const handleChange = (index1: number): void => {
        const updateChecks = props.checkedState.map((elem, index2) => 
            index1 === index2 ? !elem : elem
        )
        props.setCheckedState(updateChecks);
    }

  return (
    <div className="grid grid-cols-2 w-full border border-dashed border-l-0 border-r-0 border-b-black pt-2 pb-2 mb-2  justify-items-center">
        {typesOfIncidents.types.map((element: any, index: number): JSX.Element => {
            return (
                <div id="checkboxes-container" key={index} className="flex w-3/4 ">
                    <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={element.typeOfCrime}
                    value={element.typeOfCrime}
                    checked={props.checkedState[index]}
                    onChange={() => handleChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`} className="my-auto mx-1 text-sm">{element.valueString}</label>
                </div>
            )
        })}
    </div>
  )
}

export default TypeCheckboxes
