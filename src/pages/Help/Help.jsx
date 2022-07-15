import React from 'react'
import { Link } from 'react-router-dom';

function Help() {
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

  return (
    <div>
        <div className="back">
          <Link className='back-items d-flex' to="/" style={{position: 'relative', top: '32px', left: '110px'}} ><img className='mr-20' src="/img/arrow.svg" alt="Back" /><p className='back-text'>Вернуться в каталог</p></Link>
        </div>
    </div>
  )
}

export default Help