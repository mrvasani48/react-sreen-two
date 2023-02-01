import { QueryKeys } from "config/query";
import CourseService from "services/api/CourseService";
import { BaseAutoComplate } from "./BaseAutoComplate";

function CourseAutoComplate(props) {

    return (
        <>
            <BaseAutoComplate
                props={props}
                queryFnConfig={{
                    key: QueryKeys.ALL_COURSE,
                    apiFn: CourseService.getAll
                }}
            />

        </>
    )
}
export {
    CourseAutoComplate
}