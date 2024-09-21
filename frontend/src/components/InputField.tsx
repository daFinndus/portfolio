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
        <div className="relative flex h-12 w-full flex-row items-center border-2 border-cream-white bg-light-black pl-3 text-lg text-cream-white">
            <input
                id={id}
                value={value}
                onChange={handleInput}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                maxLength={limit}
                className="mr-10 w-full bg-transparent placeholder-cream-white placeholder-opacity-75 focus:outline-none"
            />
            <p className="absolute right-2 text-cream-white text-opacity-75">
                {remaining}
            </p>
        </div>
    );
};

export default InputField;
