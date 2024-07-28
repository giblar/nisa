import { useRouteError } from "react-router-dom";

const  ErrorPage = () =>{
const error = useRouteError();
return(
<div className="flex items-center justify-center h-screen bg-black">
    <h1 className="text-4xl text-white">not found</h1>
</div>
);
};
export default ErrorPage;