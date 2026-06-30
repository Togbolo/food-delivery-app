import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Sed pulvinar, neque vel scelerisque accumsan, 
            est erat imperdiet nunc, vel iaculis urna justo nec nunc.
             Suspendisse euismod a dui a fringilla. 
             Aenean sed magna facilisis, varius justo eu, 
             commodo magna. Maecenas non ante nibh. 
             Integer sollicitudin magna nec est vestibulum,
              consequat malesuada sem suscipit. </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            }

            )

            }
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu