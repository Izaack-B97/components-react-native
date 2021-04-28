import { useState } from "react"

export const useForm = <T extends Object>( initialState : T ) => {

    const [ form, setForm ] = useState( initialState );

    const onChange = ( field: keyof T , value : string | boolean) => {
        setForm({
            ...form,
            [ field ] : value
        });
    }

    return {
        form,
        onChange
    }

}
