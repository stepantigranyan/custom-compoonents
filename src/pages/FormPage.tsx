import { Form } from '@/ui/form/Form';
import { FormItem } from '@/ui/form/FormItem';
import { Input } from '../ui/form/Input';
import { Radio } from '../ui/form/Radio';
import { CheckBox } from '../ui/form/CheckBox';
import { Switch } from '../ui/form/Switch';
import { Upload } from '../ui/form/Upload';
import { Slider } from '../ui/form/Slider';

import { Button } from '@/ui/button/Button';

const FormPage = () => {
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
                                    <FormItem name="username" label="Username" required={true}>
                                        <Input />
                                    </FormItem>
                                    <FormItem name="password" label="Password" type="password" required={true}>
                                        <Input />
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
                            <p className="text-lg">All components</p>
                            <div className="flex items-center flex-wrap gap-3">
                                <Form className="flex flex-col gap-y-5 border-none w-100">
                                    <FormItem name="email" label="Email" type="email" required={true}>
                                        <Input />
                                    </FormItem>
                                    <FormItem name="number" label="Number" type="number" required={true}>
                                        <Input />
                                    </FormItem>
                                    <FormItem name="password" label="Password" type="password" required={true}>
                                        <Input />
                                    </FormItem>
                                    <div className="border border-solid border-gray-400 rounded-lg p-2">
                                        <FormItem name="agree" label="Agree" required={true}>
                                            <CheckBox />
                                        </FormItem>
                                        <p className="text-gray-400 text-sm mt-4">
                                            All information submitted here is strictly confidential and protected. We
                                            never share your personal details with third parties without your consent.
                                            Read our full [Privacy Policy] for more details.
                                        </p>
                                    </div>
                                    <FormItem name="fruit">
                                        <Radio value="apple" />
                                        <Radio value="orange" />
                                        <Radio value="banana" />
                                    </FormItem>
                                    <FormItem name="theme">
                                        <Switch />
                                    </FormItem>
                                    <FormItem name="files">
                                        <Upload />
                                    </FormItem>
                                    <FormItem name="slider">
                                        <Slider />
                                    </FormItem>
                                    <FormItem name="slider" className="flex gap-x-2">
                                        <Button size="sm" type="submit">
                                            Submit
                                        </Button>
                                        <Button type="reset" color="pink" size="sm">
                                            Reset
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
