import { Input } from "@mui/joy";


export function EditText(props) {

    return (

        <Input
            variant="soft"
            {...props}
            sx={{
                backgroundColor: 'white',
                borderRadius: 50,
                padding: 1.5,

                '& span': {
                    marginLeft: 2,
                    '& > svg' : {
                        height: 'auto',
                        width: 20
                    }
                },

                '& input' : {
                    '&::placeholder': {
                        fontSize: 14,
                        letterSpacing: 1
                    }
                }
            }}
            fullWidth
        />

    )
}

