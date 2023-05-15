import {FC} from 'react'
import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

import './errorPage.scss';

const ErrorPage: FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // if (error.status === 401) {
    //   // ...
    // }
    // else if (error.status === 404) {
    //   // ...
    // }

    return (
      <div className='error_page'>
        <h1>Здається, щось пішло не так! &#128575;</h1>
        <p>Статус код: {error.status}</p>
        <p>Повідолення: {error.statusText}</p>
        <p>Спробуйте пізніше або <Link to='/main'>поверніться на головну</Link>!</p>

        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ErrorPage;