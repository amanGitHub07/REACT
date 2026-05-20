import { useRouteError } from "react-router-dom";


const ErrorPage = () =>{
    const error = useRouteError();
    return(
        <div>
            <h1>Oops!!</h1>
            <h2> Something is wrong </h2>
            <p>{error.statusText} :{ error.message}</p>   
            <p><i>{error.stack}</i></p>         
                     {console.log(error)}
        </div>
    )
};

export default ErrorPage;