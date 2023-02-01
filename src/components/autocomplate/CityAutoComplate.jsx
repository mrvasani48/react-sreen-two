import { QueryKeys } from "config/query";
import CityService from "services/api/CityService";
import { BaseAutoComplate } from "./BaseAutoComplate";

function CityAutoComplate(props) {

    return (
        <>
            <BaseAutoComplate
                props={props}
                queryFnConfig={{
                    key: QueryKeys.ALL_CITY,
                    apiFn: CityService.getAll
                }}
            />

        </>
    )
}
export {
    CityAutoComplate
}