import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import useHttpQuery from "hooks/useHttpQuery";

import { CircularProgress } from "@mui/joy";

function BaseAutoComplate({props, queryFnConfig, callBackFn}) {

    const { value } = props;

    const [options, setOptions] = useState([]);
    const [selected, setValue] = useState(null);

    const getSelectedOption = (value) => {
        if (value) {
            const findable = options.find(o => o.id === value);            
            if (findable) {
                return findable
            }
        } return null;
    };

    const httpQuery = useHttpQuery(queryFnConfig);

    useEffect(() => {
        if (httpQuery.data) {
            setOptions(httpQuery.data)
        }
    }, [httpQuery.data])

    useEffect(() => {
        if (options.length > 0) {
            setValue(getSelectedOption(value));
        }
        return () => { return httpQuery.isLoading }
    }, [options]);


    return (
        <>
            <Autocomplete
                getOptionLabel={options => options.name}
                options={options}
                isOptionEqualToValue={(o, v) => o?.id === v?.id }
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                value={selected}
                loading={httpQuery.isLoading}
                disabled={httpQuery.isLoading}
                endDecorator={
                    httpQuery.isLoading && <CircularProgress size="sm" sx={{ bgcolor: 'background.surface' }} />
                }

                sx={{
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: 50,
                    padding: 1,

                    '& span': {
                        marginLeft: 2,
                        '& > svg' : {
                            height: 'auto',
                            width: 20
                        }
                    },

                    '& button': {
                        marginRight: 1,
                        backgroundColor: '#e8e8e8',
                        borderRadius: 50,

                        '& > svg': {
                            color: 'navy'
                        }
                    },

                    '& input' : {
                        '&::placeholder': {
                            fontSize: 14,
                            letterSpacing: 1
                        }
                    }
                }}
                {...props}
            />

        </>
    )
}
export {
    BaseAutoComplate
}