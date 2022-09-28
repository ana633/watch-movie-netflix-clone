import React, { useState } from "react";
import {AiOutlineSearch, AiOutlineClose} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const navigate = useNavigate();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newFilter);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const goTo = () => {
    navigate("/player");
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <Container>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {
          filteredData.length === 0 ? (
            <AiOutlineSearch />
          ) : (
            <AiOutlineClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
                <p onClick={() => goTo()}>{value.name} </p>
            );
          })}
        </div>
      )}
    </div>
    </Container>
  );
}

export default SearchBar;


const Container = styled.div`
  .search {
    .searchInputs {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      input {
        background-color: black;
        color: white;
        border-color: white;
        border-radius: 2px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        font-size: 18px;
        padding: 1px;
        height: 30px;
        width: 300px;
      }
      input:focus {
        outline: none;
      }
      .searchIcon {
        height: 20px;
        width: 50px;
        background-color: black;
        display: grid;
        place-items: center;
      }
      .searchIcon svg {
        font-size: 35px;
      }
    }
    .dataResult {
      position: absolute;
      top: 70%;
      right: 13.7%;
      width: 300px;
      height: 200px;
      background-color: black;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      overflow: hidden;
      overflow-y: auto;
      .dataItem {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        color: white;
      }
      p {
        padding: 1rem;
        color: white;
      }
      p:hover {
        background-color: lightgrey;
      }
      #clearBtn {
        cursor: pointer;
      }
    }
    
  }
`;
