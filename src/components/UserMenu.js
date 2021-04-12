import { Link } from 'react-router-dom';

export function UserMenu() {
  return (
    <>
      <div>
        <Link to="/">Main</Link>
        <span>Hello!</span>
        <button>Logout</button>
      </div>
    </>
  );
}
