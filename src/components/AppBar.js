import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';

export function AppBar() {
  return (
    <>
      <header>
        <UserMenu />
        <AuthNav />
      </header>
    </>
  );
}
