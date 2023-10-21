import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { DiBintray } from "react-icons/di";
import FormatPrice from "../Helpers/Formatprice";
import { FaCheck } from "react-icons/fa";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    all_products,
    updateFiltervalue,
    clearFilters,
  } = useFilterContext();

  // to get unique data of each fields
  const getUniqueData = (data, attr) => {
    let newVAl = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVAl = ["all", ...new Set([].concat(...newVAl))]);
      newVAl = newVAl.flat();
    }
    return (newVAl = ["all", ...new Set(newVAl)]); // = anathi newval ma repit category nay thay.and all pan joye

    console.log("attr", attr);

    console.log("newVAl", newVAl);
  };
  console.log("color", color);

  // we need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companydata = getUniqueData(all_products, "company"); // this to api mathi cetegory wize data import
  const colorsdata = getUniqueData(all_products, "colors");

  console.log("categoryOnlyData", categoryOnlyData);
  console.log("companydata", companydata);
  console.log("colorsdata", colorsdata);

  return (
    <Wrapper>
      <div className=" filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            onChange={updateFiltervalue}
            value={text}
          ></input>
        </form>
      </div>
      <div className="filter-category">
        <h3>Categropy</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFiltervalue}
              >
                {curElem}
              </button>
            );
          })}

          <DiBintray size={150} />
        </div>
      </div>

      <div className="filter-company">
        <h3>company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFiltervalue}
          >
            {companydata.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsdata.map((curColor, index) => {
            console.log('curColor', curColor)
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFiltervalue}
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                // className="btnStyle"lassName={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFiltervalue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFiltervalue}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 100%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
