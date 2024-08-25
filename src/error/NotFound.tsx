import { useRouteError } from "react-router-dom";

type TNotFound = {
    data: string;
    error: any;
    internal: boolean;
    status: number
    statusText: string

}


const NotFound = () => {
    const error = useRouteError() as TNotFound;


    return (
        <div className="flex justify-center items-center">
            <div>
                <h1>
                    <i>{error.status && error.statusText}</i>
                </h1>

                <p>
                    <i>{error.data}</i>
                </p>
            </div>
        </div>
    );
};

export default NotFound;