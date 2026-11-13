import { type FC, useContext, useEffect, useState } from 'react';
import type { InputProps } from '@/ui/form/types.ts';
import {
    labelDefaultStyles,
    uploadDefaultStyles,
    uploadDisabledStyles,
    uploadItemDefaultStyles,
    uploadItemDisabledDefaultStyles,
} from '@/ui/form/styles.ts';

import { Plus, Trash2 } from 'lucide-react';

import { v4 as uuidv4 } from 'uuid';

import { cn } from '@/utils/cn';
import { FormContext } from '@/ui/form/Form';
import { FormItemContext } from '@/ui/form/FormItem';

export const Upload: FC<InputProps> = ({ className, onChange, onInput, required, children, disabled, ...rest }) => {
    const dataRef = useContext(FormContext);
    const { props } = useContext(FormItemContext);
    const [value, setValue] = useState([]);

    useEffect(() => {
        dataRef.current[props.name] = value;
    }, [value]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const filesArray = Array.from(files);
        setValue((prev) => [...filesArray, ...prev]);
    };

    const handleDeleteFile = (name: string) => {
        if (disabled) return;
        setValue((prev) => prev.filter((x) => x.name !== name));
    };

    return (
        <div className="flex gap-x-2">
            <div className={cn(labelDefaultStyles)}>
                <label
                    htmlFor={props.id}
                    className={cn(uploadDefaultStyles, disabled && uploadDisabledStyles, className)}
                >
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Plus size={25} />
                        <h3>Upload</h3>
                    </div>
                </label>
                <input onChange={handleFileChange} type="file" className="hidden" {...props} {...rest} />
            </div>
            <div className="no-scrollbar flex flex-col gap-y-1 overflow-y-auto h-40">
                {value.map((file) => (
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
