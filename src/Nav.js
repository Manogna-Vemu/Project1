import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#e5e5e5' }}>
      <div style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
        <Link to="/">Home</Link>
        <Link to="/Assignment3">Products</Link>
      </div>
      <div style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Nav;
