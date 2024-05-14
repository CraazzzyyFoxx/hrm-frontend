import * as React from 'react';
import { IMaskInput } from 'react-imask';
import TextField, {TextFieldProps} from "@mui/material/TextField";


interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="+7 (#00) 000-00-00"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);


const PhoneNumberInput = (props: TextFieldProps) => {
    return (
        <TextField
            {...props}
            InputProps={{
                inputComponent: TextMaskCustom as any,
            }}
        />
    );
};

export default PhoneNumberInput;
