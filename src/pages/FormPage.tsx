import { useState } from 'react';

import { Form, FormItem } from '@/ui/form/form.tsx';
import { Input } from '../ui/form/Input';
import { Radio } from '../ui/form/Radio';
import { CheckBox } from '../ui/form/CheckBox';
import { Switch } from '../ui/form/Switch';
import { Upload } from '../ui/form/Upload';
import { Slider } from '../ui/form/Slider';

import { Button } from '@/ui/button/Button';

const FormPage = () => {
    const [disabledAll, setDisabledAll] = useState<boolean>(false);

    const handleToggleDisabledAll = () => {
        setDisabledAll((prev) => !prev);
    };

    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-5">
                <h1 className="text-4xl font-bold">Form</h1>
                <p>
                    High-performance form component with data domain management. Includes data entry, validation, and
                    corresponding styles.
                </p>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Examples</h2>
                <div className="grid grid-cols-1 gap-y-10">
                    <div className="flex flex-col gap-y-5">
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">
                                Basic Form data control. Includes layout, initial values, validation and submit.
                            </p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Form className="flex flex-col gap-y-5">
                                    <FormItem>
                                        <h2 className="text-lg font-bold">Contact</h2>
                                        <div className="flex flex-col gap-y-3">
                                            <Input
                                                className="grid grid-cols-2"
                                                label="Name"
                                                placeholder="Joe"
                                                type="text"
                                                required={true}
                                            />
                                            <Input
                                                className="grid grid-cols-2"
                                                label="Email"
                                                placeholder="example@gmail.com"
                                                type="email"
                                                required={true}
                                            />
                                            <Input
                                                className="grid grid-cols-2"
                                                label="Password"
                                                type="password"
                                                required={true}
                                            />
                                        </div>
                                    </FormItem>
                                    <FormItem className="flex flex-col gap-y-3">
                                        <h2 className="text-lg font-bold">Skills</h2>
                                        <div>
                                            <Radio name="skills" label="Html" />
                                            <Radio name="skills" label="Javascript" />
                                            <Radio name="skills" label="CSS" />
                                        </div>
                                    </FormItem>
                                    <FormItem>
                                        <h2 className="text-lg font-bold">Privacy & Terms</h2>
                                        <CheckBox
                                            className="grid grid-cols-2"
                                            label="Legal & Privacy"
                                            required={true}
                                        />
                                    </FormItem>
                                    <FormItem>
                                        <Button size="sm" type="submit">
                                            Submit
                                        </Button>
                                    </FormItem>
                                </Form>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col gap-y-5 border border-solid border-gray-300 rounded-lg">
                            <p className="text-lg">Set component to disabled, only works for antd components.</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Form className="flex flex-col gap-y-5 border-none w-100">
                                    <FormItem className="mb-20">
                                        <CheckBox label="Disable all" onChange={handleToggleDisabledAll} />
                                    </FormItem>
                                    <FormItem>
                                        <div className="flex flex-col gap-y-3">
                                            <Input
                                                disabled={disabledAll}
                                                className="grid grid-cols-2"
                                                label="Name"
                                                placeholder="Joe"
                                                type="text"
                                            />
                                            <Input
                                                disabled={disabledAll}
                                                className="grid grid-cols-2"
                                                label="Email"
                                                placeholder="example@gmail.com"
                                                type="email"
                                            />
                                            <Input
                                                disabled={disabledAll}
                                                className="grid grid-cols-2"
                                                label="Number"
                                                type="number"
                                            />
                                            <Input
                                                disabled={disabledAll}
                                                className="grid grid-cols-2"
                                                label="Password"
                                                type="password"
                                            />
                                        </div>
                                    </FormItem>
                                    <FormItem className="flex flex-col gap-y-3">
                                        <div className="flex items-center gap-x-3">
                                            <Radio disabled={disabledAll} name="example" />
                                            <Radio disabled={disabledAll} name="example" />
                                        </div>
                                        <CheckBox disabled={disabledAll} />
                                        <Switch disabled={disabledAll} />
                                        <Upload disabled={disabledAll} multiple />
                                    </FormItem>
                                    <FormItem>
                                        <Slider disabled={disabledAll} />
                                    </FormItem>
                                    <FormItem>
                                        <Button disabled={disabledAll} size="sm" type="submit">
                                            Submit
                                        </Button>
                                    </FormItem>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPage;
