import initialStateCourses from '../initialStateCourses';
import {ON_COURSE_TITLE_CLICK_HANDLER, ON_MODULE_TITLE_CLICK_HANDLER} from "../actionTypes/actionTypes";

function reducerCourses(state = initialStateCourses, action) {

    switch (action.type) {
        case ON_COURSE_TITLE_CLICK_HANDLER:

            return {
                ...state,
                [action.courseId]: {...state[action.courseId], show: action.courseShowVar}
            };

        case ON_MODULE_TITLE_CLICK_HANDLER:

            return {
                ...state,
                [action.courseId]: {
                    ...state[action.courseId], body: [...state[action.courseId].body.map((module) => {
                        if (module.id === action.moduleId) {
                            return {...module, show: action.moduleShowVar}
                        }
                        return module;
                    })]
                }
            };

        default:
            return state;
    }
}

export default reducerCourses;
