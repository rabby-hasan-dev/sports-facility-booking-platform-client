import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

type TNotFound = {
    data: string;
    error: any;
    internal: boolean;
    status: number
    statusText: string

}


const NotFound = () => {
    const error = useRouteError() as TNotFound;

    console.log(error);
    return (
        <div className="flex justify-center items-center">
            <Result
                status="404"
                title={error?.status}
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to='/'><Button >Back Home</Button></Link>}
            />

        </div>
    );
};

export default NotFound;