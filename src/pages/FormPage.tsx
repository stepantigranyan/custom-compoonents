import {CheckBox, Input} from '@/ui/form/form.tsx'

const FormPage = () => {
    return (
        <>
            <Input required={true} placeholder={'Enter your age'} label={'Age'} />
            <CheckBox />
        </>
    )
};

export default FormPage;