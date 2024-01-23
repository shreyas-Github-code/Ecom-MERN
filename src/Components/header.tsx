import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const user = { _id: "gdfg", role: 'admin' };

const Header = () => {
    
    const [isDialogOpen, setDialogOpen] = useState(false);
    return (
        <nav className='header'>
            <Link to={'/'}>Home</Link>
            <Link to={'/search'}><FaSearch /></Link>
            <Link to={'/cart'}><FaShoppingBag /></Link>

            {user?._id ? (
                <>
                    <button onClick={()=>{setDialogOpen(!isDialogOpen)}}>
                        <FaUser />
                    </button>
                    
                        <dialog open={isDialogOpen}>
                            <div>
                                {user.role === 'admin' && (
                                    <Link to='/admin/dashboard'>Admin</Link>
                                )}
                                <Link to="/orders">Orders</Link>
                                <button >
                                    <FaSignOutAlt />
                                </button>
                            </div>
                        </dialog>
                
                </>
            ) : (
                <Link to={'/login'}>
                    <FaSignInAlt />
                </Link>
            )}
        </nav>
    );
};

export default Header;
