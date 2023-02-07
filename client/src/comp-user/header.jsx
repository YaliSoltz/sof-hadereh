import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/User.css";
const Header = () => {
    
  const [isOpen, setIsOpen] = useState(false);
    return (
        < div className='Navbar'> 
       
       <span className="nav-logo">הסוף הטוב</span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <Link to='/' className='labelNav' >דף הבית</Link>
        <Link to='/lecture' className='labelNav'>הרצאות</Link>
        <Link to='/' className='labelNav'>ייעוץ משפחתי להוספיס בית</Link>
        <Link to='/' className='labelNav'>ביקורי בית פרטיים </Link>
        <Link to='/article' className='labelNav'>מאמרים</Link>
        <Link to='/' className='labelNav'>המלצות קריאה</Link>
        <Link to='/sharing' className='labelNav'>מטופלים משתפים</Link>
        <Link to='/' className='labelNav'>אודות עליי</Link> 
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
        

        </div>
    );
}

export default Header;
