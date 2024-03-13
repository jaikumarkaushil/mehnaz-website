import {
    useWatch
} from 'react-hook-form';

const CustomController = ({
    control,
    register,
    name,
    rules,
    render,
    onChange,
    onBlur
}) => {
    const value = useWatch({
        control,
        name
    });

    const props = register(name, rules);
    // props.onChange = onChange || props.onChange;
    props.onBlur = onBlur || props.onBlur;

    return render({
        value,
        onChange: ((e) => {
            if (onChange) {
                onChange(e); //storing state variables value in local state file
                props.onChange({ //storing variables value in react-hook-form handleSubmit
                    target: {
                        name,
                        value: e.target.files ? e.target.files[0] : e.target.checked ? e.target.checked : e.target.value ? e.target.value : null
                    }
                })
            } else {
                props.onChange({ //storing variables value in react-hook-form handleSubmit
                    target: {
                        name,
                        value: e.target.files ? e.target.files[0] : e.target.checked ? e.target.checked : e.target.value ? e.target.value : ""
                    }
                })
            }
            if (e.target.files) {
                console.log("File Uploaded", "success")
            }
        }),
        onBlur: props.onBlur,
        name: props.name,
    });
}

export default CustomController;