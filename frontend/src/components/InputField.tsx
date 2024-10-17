import React, { useState } from "react";

interface InputFieldProps {
    id: string;
    limit: number;
    onBlur: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    placeholder: string;
    value: string;
}

/**
 * This is an input field component.
 * @param id - the id of the input field
 * @param limit - the character limit of the input field
 * @param onBlur - the function to call when the input field loses focus
 * @param onChange - the function to call when the input field changes
 * @param onFocus - the function to call when the input field gains focus
 * @param placeholder - the placeholder text of the input field
 * @param value - the value of the input field
 */
const InputField = ({
    id,
    limit,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    value,
}: InputFieldProps) => {
    const [remaining, setRemaining] = useState(limit);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRemaining(limit - e.target.value.length);
        onChange(e);
    };

    return (
        <div className="relative flex h-12 w-full flex-row items-center border-2 border-dark-gray bg-dark-white pl-3 text-lg text-dark-gray dark:border-cream-white dark:bg-light-black dark:text-cream-white">
            <input
                id={id}
                value={value}
                onChange={handleInput}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                maxLength={limit}
                className="mr-10 w-full bg-transparent placeholder-dark-gray placeholder-opacity-75 focus:outline-none dark:placeholder-cream-white"
            />
            <p className="absolute right-2 text-opacity-75">{remaining}</p>
        </div>
    );
};

export default InputField;
