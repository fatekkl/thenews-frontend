
import { useState } from "react";

export default function CustomCheckbox({checked = false}) {

    return (
        <label className="flex items-center cursor-pointer space-x-3">
            {/* Checkbox personalizada */}
            <div
                className={`w-6 h-6 flex items-center justify-center border-2 cursor-auto rounded-md transition-all duration-300 ${
                    checked ? "bg-[#FFCE04] border-[#FFCE04]" : "border-gray-400"
                }`}
            >
                {checked && (
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 12.75l5.25 5.25L19.5 7.5l-1.5-1.5-8.25 8.25-3.75-3.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>

        </label>
    );
}
