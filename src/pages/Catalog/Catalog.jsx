import React, { useState, useEffect } from 'react'
import './Catalog.css'
import { connect } from "react-redux";
import { getPokemon } from "../../store/actions";
import Cards from './Cards';    

function Catalog(props) {

  const [isActive, setIsActive] = useState(false);
  const [isActives, setIsActives] = useState(false);
  useEffect(() => {
    props.getPokemon("https://pokeapi.co/api/v2/pokemon/");
  }, []);
  // const data =  axios(url)
  // data.map((id, ) => {
  return (
        <div class="Catalog">
        <div class="razryv">
          <div class="round">
            </div>
            <img class="line" src="/img/line.png"/>
              </div>
                <div class="l-p">
                <div class="Pocolenie">
                    <div class="first-dropdown-btn mb-20" onClick={(e) => 
                    setIsActive(!isActive)}>
                      Поколение
                      <button class="arrow-btn">
                        <img src="/img/Vector.svg" alt=""/>
                      </button>
                    </div>
                    {isActive && (
                      <div className="first-dropdown-content">
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />1-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />2-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />3-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />4-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />5-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />6-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />7-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />8-ое</p>
                        <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />9-ое и новее</p>
                      </div>
                    )}
                  </div>
                  <div class="Pocolenie">
                      <div class="first-dropdown-btn mb-20 mt-20" onClick={(e) => 
                      setIsActives(!isActives)}>
                        Тип
                        <button className="arrow-btn">
                          <img src="/img/Vector.svg" alt=""/>
                        </button>
                      </div>
                      {isActives && (
                      <div className="second-dropdown-content">
                        <p className='labels'><input className='checkbox mb-20 mr-15' type="radio" name='1' value='yes' /><span className='labelses'>Физические</span></p>
                        <p className='labels'><input className='checkbox mb-20 mr-15' type="radio" name='1' value='yes' /><span className='labelses'>Специальные</span></p>
                      </div>
                    )}
                      <div style={{position: 'relative'}} id='kach' class="third-dropdown-btn">
                        <div class="first-dropdown-btn mb-20 mt-20">
                          Физические
                          <button class="arrow-btn"><img src="/img/Vector.svg" alt=""/></button>
                      </div>
                      <div class="first-dropdown-btn mb-20 mt-20">
                        Специальные
                        <button class="arrow-btn"><img src="/img/Vector.svg" alt=""/></button>
                      </div>
                    </div>
                  </div>
                </div>
                    
                  
                <div className="r-p ">
                    <div class="sort"><p class="mb-20">Сортировать по:</p>
                        <div class="sort-items">
                          <a href="*">Популярности</a>
                          <a href="*">Рейтингу</a>
                          <a href="*">Уровню силы</a>
                        </div>
                        </div>

                          <Cards />
                            {/*
                            <div class="cards">
                            <div class="card" key={el.id}>
                              <img src={el.sprites.front_default}/>
                              <p>{el.name}</p>
                            </div>
                             <div class="card">
                              <img src="/img/2.svg" alt="Bulbazavr"/>
                              <p class="Dgiglipaf">Бульбазавр</p>
                            </div>
                              <div class="card">
                              <img src="/img/3.png" alt="Skvitrl"/>
                              <p>Сквиртл</p>
                            </div>
                            <div class="card">
                              <img src="/img/4.png" alt="Dgiglipaf"/>
                              <p class="Dgiglipaf">Джигглипафф</p>
                            </div> */}
                </div>
              </div>
  )

} 



const mstp = (state) => {
  return {
    isLoading: state.pkr.isLoading,
    isError: state.pkr.isError,
    errorMsg: state.pkr.error,
    pokemon: state.pkr.pokemon
  };
};

export default connect(mstp, { getPokemon })(Catalog);