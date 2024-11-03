import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    // console.log(categories);
    // const {category}=categories
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted my-12">
                {/* <h2>{ categories.length}</h2> */}
                {
                    categories.map(category => (
                        <NavLink to={`/category/${category.category}`} key={category.id} role="tab" className={({isActive})=>`tab text-2xl ${isActive?'tab-active':''}`}>{category.category}</NavLink>))
            }
            
            </div>
        </div>
    );
};

Categories.propTypes = {
    
};

export default Categories;





// import { NavLink } from 'react-router-dom'

// const Categories = ({ categories }) => {
//   return (
//     <div role='tablist' className='tabs tabs-lifted'>
//       {categories.map(category => (
//         <NavLink
//           key={category.category}
//           to={`/category/${category.category}`}
//           role='tab'
//           className={({ isActive }) =>
//             `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`
//           }
//         >
//           {category.category}
//         </NavLink>
//       ))}
//     </div>
//   )
// }

// export default Categories