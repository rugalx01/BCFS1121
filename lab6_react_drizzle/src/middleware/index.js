import { generateStore, EventActions } from "@drizzle/store";
import drizzleOptions from "../drizzleOptions";
import { toast } from "react-toastify";

// heavy duty
const contractEventNotifier = (Store) => (next) => (action) => {
    if (action.type === EventActions.EVENT_FIRED) {
        const contract = action.name;
        const contractEvent = action.event.event;
        const message = action.event.returnValues.newValue;
        const date = action.event.returnValues.date;
        const display = `${contract}(${contractEvent}): ${message}..${date}`;

        toast.success(display, { position: toast.POSITION.TOP_RIGHT });
    }
    return next(action);
}

//這邊放入才會在畫面上面做顯示
const appMiddlewares = [contractEventNotifier];
export default generateStore({
    drizzleOptions,
    appMiddlewares,
    disableReduxDevTools: false, // enable ReduxDevTools
})