import { Button } from "@mui/joy";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => (
    {
        sgiButton: {
            padding: 20
        }
    }
))


export function SGIButton (props) {
    const classes = useStyle();

    return (
        <Button 
            {...props}
            sx={{
               padding: 2,
               backgroundColor: 'navy',
               letterSpacing: 0.5,
               textTransform: 'uppercase',
               borderRadius: 50
            }}
        >{props.children}</Button>
    )
}