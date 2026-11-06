import { type FC, useRef, useState } from 'react';
import type { InputProps, FormProps, FormItemProps } from '@/ui/form/types.ts';

import { Trash2 } from 'lucide-react';

import {
    formDefaultStyles,
    labelDefaultStyles,
    inputDefaultStyles,
    checkBoxDefaultStyles,
    radioDefaultStyles,
    switchDefaultStyles,
    uploadDefaultStyles,
    uploadDisabledStyles,
    sliderDefaultStyles,
    uploadItemDefaultStyles,
    uploadItemDisabledDefaultStyles,
    sliderDisabledStyles,
} from '@/ui/form/styles.ts';

import { Plus } from 'lucide-react';

import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/utils/cn';

export const Form: FC<FormProps> = ({ className, children, ...props }) => {
    return (
        <form className={cn(formDefaultStyles, className)} {...props}>
            {children}
        </form>
    );
};

export const FormItem: FC<FormItemProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(className)} {...props}>
            {children}
        </div>
    );
};

export const Input: FC<InputProps> = ({ id, label, className, required, ...props }) => {
    const generateId = id || uuidv4();

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className="text-red-500 mr-1">*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input id={generateId} className={cn(inputDefaultStyles, className)} required={required} {...props} />
        </div>
    );
};

export const CheckBox: FC<InputProps> = ({ id, label, className, onChange, onInput, required, ...props }) => {
    const generateId = id || uuidv4();

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className="text-red-500 mr-1">*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input
                id={generateId}
                type="checkbox"
                onChange={onChange}
                className={cn(checkBoxDefaultStyles, className)}
                required={required}
                {...props}
            />
        </div>
    );
};

export const Radio: FC<InputProps> = ({ id, label, className, onChange, onInput, required, ...props }) => {
    const generateId = id || uuidv4();

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className="text-red-500 mr-1">*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input
                id={generateId}
                type="radio"
                onChange={onChange}
                className={cn(radioDefaultStyles, className)}
                required={required}
                {...props}
            />
        </div>
    );
};

export const Switch: FC<InputProps> = ({ id, label, className, onChange, onInput, required, ...props }) => {
    const generateId = id || uuidv4();

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className="text-red-500 mr-1">*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input {...props} type="checkbox" id={generateId} className={cn(switchDefaultStyles, className)} />
        </div>
    );
};

export const Upload: FC<InputProps> = ({
    id,
    className,
    onChange,
    onInput,
    required,
    children,
    disabled,
    ...props
}) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const filesArray = Array.from(files);
        setSelectedFiles((prev) => [...filesArray, ...prev]);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleDeleteFile = (name: string) => {
        if (disabled) return;
        setSelectedFiles((prev) => prev.filter((x) => x.name !== name));
    };

    const generateId = id || uuidv4();

    return (
        <div className="flex gap-x-2">
            <div className={cn(labelDefaultStyles)}>
                <label
                    htmlFor={generateId}
                    className={cn(uploadDefaultStyles, disabled && uploadDisabledStyles, className)}
                >
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Plus size={25} />
                        <h3>Upload</h3>
                    </div>
                </label>
                <input
                    disabled={disabled}
                    onChange={handleFileChange}
                    type="file"
                    ref={fileInputRef}
                    id={generateId}
                    className="hidden"
                    {...props}
                />
            </div>
            <div className="no-scrollbar flex flex-col gap-y-1 overflow-y-auto h-40">
                {selectedFiles.map((file) => (
                    <div
                        key={uuidv4()}
                        onClick={() => handleDeleteFile(file.name)}
                        className={cn('group', uploadItemDefaultStyles, disabled && uploadItemDisabledDefaultStyles)}
                    >
                        <div
                            className={cn(
                                disabled
                                    ? 'hidden'
                                    : 'absolute top-0 left-0 size-full flex items-center justify-center opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:bg-black/30'
                            )}
                        >
                            <Trash2 size={30} className="text-white"></Trash2>
                        </div>
                        <h3>{file.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Slider: FC<InputProps> = ({
    id,
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 0,
    label,
    className,
    disabled,
    onChange,
    onInput,
    required,
    ...props
}) => {
    const [v, setV] = useState<number>(defaultValue);

    const generateId = id || uuidv4();

    const percent = ((v - min) / (max - min)) * 100;

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className="text-red-500 mr-1">*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input
                type="range"
                onChange={(e) => setV(Number(e.target.value))}
                style={{ '--range-progress': `${percent}%` }}
                className={cn(sliderDefaultStyles, disabled && sliderDisabledStyles, className)}
                id={generateId}
                min={min}
                max={max}
                defaultValue={defaultValue}
                value={v}
                step={step}
                disabled={disabled}
                {...props}
            />
        </div>
    );
};
