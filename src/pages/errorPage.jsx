import { Link } from "react-router-dom";

function ErrorPage()
{
    return(
        <>
        <h2>Oh no, it seems that the page you are trying to reach is currently offline or unresponsive, fear not! click the link below to go to the main page:{")"}</h2>
        <Link className="ErrorBtn"  to={'/'}/>
        </>
    )
}
export default ErrorPage