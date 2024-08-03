import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByCategory } from '../redux/ads/adsSlice'

const Categories = () => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

  const handleCategories = (category) => {
    setCategory(category)

    if (!category) {
      return
    }

    dispatch(filterByCategory(category))
  }

  return (
    <ul className="categories_navlinks">
      <li className="navlink" onClick={() => handleCategories('Sarees')}>
        Sarees
      </li>
      <li className="navlink" onClick={() => handleCategories('Lehengas')}>
        Lehengas
      </li>
      <li className="navlink" onClick={() => handleCategories('Men Kurtas')}>
        Men Kurtas
      </li>
      <li className="navlink" onClick={() => handleCategories('Sherwanis')}>
        Sherwanis
      </li>
      <li className="navlink" onClick={() => handleCategories("Men's Suits")}>
      Men's Suits 
      </li>
      <li className="navlink" onClick={() => handleCategories('Indo-Western Outfits')}>
        Indo-Western Outfits
      </li>
      <li className="navlink" onClick={() => handleCategories('Designer Wear')}>
        Designer Wear
      </li>
      <li className="navlink" onClick={() => handleCategories('Ethnic Accessories')}>
        Ethnic Accessories
      </li>
      <li className="navlink" onClick={() => handleCategories('Others')}>
        Others
      </li>
    </ul>
  )
}

export default Categories
