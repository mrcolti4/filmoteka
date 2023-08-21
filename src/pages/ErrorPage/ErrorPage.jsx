import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styled from './ErrorPage.module.css';
const ErrorPage = () => {
  return (
    <section>
      <div className="container">
        Error! Something went wrong! You can return to{' '}
        <Link to={'/'} className={clsx(styled.error__link)}>
          homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
