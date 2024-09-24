

import {useRouteError} from 'react-router-dom'


export default function ErrorPage(){

    const error = useRouteError();
    console.error(error);

    return(
        <div>
            <h1>Something unexpected happened!</h1>
            <p>
                <i>{error.message || error.statusText }</i>
            </p>
       </div>
    );
}

