import { Link } from 'react-router-dom'

export default function SearchBox(filter) {
  return(
    <div className="app__list__searchbox">
      <div className="app__list__searchbox__container">
        <input 
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
      </div>
      
    </div>
  )
}