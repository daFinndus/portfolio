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
        <div className="border-cream-white bg-light-black text-cream-white relative flex h-12 w-full flex-row items-center border-2 pl-3 text-lg">
            <input
                id={id}
                value={value}
                onChange={handleInput}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                maxLength={limit}
                className="placeholder-cream-white mr-10 w-full bg-transparent placeholder-opacity-75 focus:outline-none"
            />
            <p className="text-cream-white absolute right-2 text-opacity-75">
                {remaining}
            </p>
        </div>
    );
};

export default InputField;
