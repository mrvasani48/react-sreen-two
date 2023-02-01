import { QueryKeys } from "config/query";
import GenderService from "services/api/GenderService";
import { BaseAutoComplate } from "./BaseAutoComplate";

function GenderAutoComplate(props) {

    return (
        <>
            <BaseAutoComplate
                props={props}
                queryFnConfig={{
                    key: QueryKeys.ALL_GENDER,
                    apiFn: GenderService.getAll
                }}
            />

        </>
    )
}
export {
    GenderAutoComplate
}