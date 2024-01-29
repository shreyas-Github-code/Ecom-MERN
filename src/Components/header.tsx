import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const user = { _id: "", role: '' };

const Header = () => {
    
    const [isDialogOpen, setDialogOpen] = useState(false);

    const logoutHandler=()=>{setDialogOpen(false)};
    return (
        <nav className='header'>
            <Link onClick={()=>{setDialogOpen(false)}} to={'/'}>Home</Link>
            <Link onClick={()=>{setDialogOpen(false)}} to={'/search'}><FaSearch /></Link>
            <Link onClick={()=>{setDialogOpen(false)}} to={'/cart'}><FaShoppingBag /></Link>

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
                                <button onClick={()=>{logoutHandler()}}>
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
