import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import {Link, useNavigate} from 'react-router-dom';
import {FaPowerOff} from 'react-icons/fa';
import {firebaseAuth} from '../utils/firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import SearchBar from './SearchBar';

export default function Navbar({isScrolled}) {
    const links = [
        {name: "Home", link:"/"},
        {name: "TV Shows", link:"/tv"},
        {name: "Movies", link:"/movies"},
        {name: "My List", link:"/mylist"},
    ];
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Calling UseEffect")
        dispatch(getGenres());
      }, [genresLoaded]);
    
      useEffect(() => {
        if (genresLoaded) {
          dispatch(fetchMovies({ genres, type: "all" }));
        }
      }, [genresLoaded]);


    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(!currentUser) navigate("/login");
    });

   

  return (
    <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="links flex">
                    {links.map(({name, link}) => {
                        return (
                            <li key={name}>
                                <Link className="active" to={link}>{name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='flex'>
                <SearchBar placeholder="Enter a Title..." data={movies} />
            </div>

            <div className="right flex a-center">
                
                <button onClick={()=>signOut(firebaseAuth)}>
                    <FaPowerOff/>
                </button>
            </div>
        </nav>
    </Container>
  )
}


const Container = styled.div`
    .scrolled {
        background-color: black;
    }

    nav {
        position: sticky;
        top: 0;
        height: 6.5rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 1rem 4rem;
        align-items: center;
        transition: 0.3s ease-in-out;
        .left {
            gap: 2rem;
            .brand {
                img {
                    height: 4rem;
                }
            }
            .links {
                list-style-type: none;
                gap: 2rem;
                li {
                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
        .right {
            gap: 1rem;
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                &:focus {
                    outline: none;
                }
                svg {
                    color: #f34242;
                    font-size: 1.2rem;
                }
            }
        }
    }
`;