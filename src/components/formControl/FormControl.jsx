import { Typography } from "@mui/material";
import { EditText } from "components";
import LoadingScreen from "pages/LoadingScreen";
import { useEffect, useState } from "react";

export function SGIFormControl() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setTimeout(() => {
                // setLoading(false)
            }, 8000);
        })();

        return () => {}
    }, []);

    

    return (
        <>
            {loading && <LoadingScreen isFullScreen />}

            {!loading && <Typography>Data Loaded</Typography>}
        </>
    )
}