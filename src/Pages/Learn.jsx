import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Learn = ({ data }) => {
  // console.log(data);
  const { id } = useParams();
  // console.log(id);
  // console.log(data[0].id);
  return (
    <Wrapper>
      <h1>Learn Page</h1>
      <Link to="/">
        <BsFillArrowLeftCircleFill
          style={{ fontSize: "20px", color: "black" }}
        ></BsFillArrowLeftCircleFill>
      </Link>

      {data.map((data) => {
        // console.log(data.id)
        if (id === data.id) {
          // console.log(data.id);
          return (
            <>
              <div key={data.id}>
                <p>{data.bodyType}</p>
                <div>
                  <CarsInfo>
                    <strong>{data.modelName}</strong>
                    <span>{data.modelType}</span>
                  </CarsInfo>
                </div>
              </div>
              <img
                className="volvo__img"
                src={data.imageUrl}
                alt={data.id}
                width="350px"
                height="400px"
              />
            </>
          );
        }
      })}
    </Wrapper>
  );
};

export default Learn;

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const CarsInfo = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  span {
    margin-left: 4px;
  }
`;
