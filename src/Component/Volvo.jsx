/* eslint-disable react/jsx-no-target-blank */
import Carousel from "react-elastic-carousel";
import { data } from "../Cars";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
    itemsToScroll: 1,
    pagination: true,
    showArrows: false,
  },
  {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 2,
    showArrows: false,
    pagination: false,
  },
  { width: 768, itemsToShow: 4, pagination: false },
];

function Volvo() {
  return (
    <>
      <div>
        <CarouselContainer>
          <Carousel
            itemsToScroll={3}
            breakPoints={breakPoints}
            infiniteLoop={false}
          >
            {data.map((item, index) => (
              <Wrapper key={index}>
                <div className="volvo_cardContainer">
                  <div key={item.id}>
                    <p>{item.bodyType}</p>
                    <div>
                      <CarsInfo>
                        <strong>{item.modelName}</strong>
                        <span>{item.modelType}</span>
                      </CarsInfo>
                    </div>
                  </div>
                  <img
                    className="volvo__img"
                    src={item.imageUrl}
                    alt={index}
                    width="300px"
                    height="100%"
                  />
                  <LearnContainer>
                    <h4>
                      <span>
                        <Link to={`/learn/${item.id}`}>LEARN</Link>
                      </span>
                      <AiOutlineRight />
                    </h4>
                    <h4>
                      <a
                        href="https://www.volvocars.com/in/v/cars/other-powertrains"
                        target="_blank"
                      >
                        SHOP
                      </a>
                      <AiOutlineRight />
                    </h4>
                  </LearnContainer>
                </div>
              </Wrapper>
            ))}
          </Carousel>
        </CarouselContainer>
      </div>
    </>
  );
}

export default Volvo;

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const CarouselContainer = styled.div``;

const CarsInfo = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  span {
    margin-left: 4px;
  }
`;

const LearnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
  color: blue;

  a{
    text-decoration: none;
    color: blue;
  }
  a:hover {
    color: black;
    
  }
  h4 {
    display: flex;
    align-items: center;
  }
`;
