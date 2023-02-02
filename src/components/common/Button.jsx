import { Button } from "@mui/joy";

export function DUButton (props) {
    return (
        <Button 
            {...props}
            sx={{
                ...props.sx, 
                borderRadius: "60px",
                padding: "10px !important",
                textTransform: "capitalize",
                fontSize: "15px",
                display: "flex",
                gap: "5px",
            }}
        >{props.children}</Button>
    )
}