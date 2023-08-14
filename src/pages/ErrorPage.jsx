import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container">
      Error! Something went wrong! You can return to{' '}
      <Link to={'/'}>homepage</Link>
    </div>
  );
};

export default ErrorPage;
