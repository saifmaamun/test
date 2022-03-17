import {
  Category,
  Chooser,
  Filter,
  FilterConnection,
  Preview,
  PreviewPopup,
  SelecterWrapper,
  Selector,
  TemplateContainer,
} from './Templates.styled';
import IndustryImage from './img/industry.png';
import TechnologyImage from './img/technology.png';
import CategoryIcon from './img/cat.png';
import PreviewImage from './img/preview.png';
import { Col20, Row } from '../../../styles/utils.styled';
import Model from '../Components/Model/Model';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ModelContainer } from '../Projects/Projects.styled';

const Templates = () => {
  const [isIndustryOpen, setIndustryOpen] = useState(false);
  const [isTechnologyOpen, setTechnologyOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const modelsData = [
    {
      id: 1,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 6,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 7,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 8,
      name: 'Model 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const openPreview = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <SelecterWrapper>
        <Selector onClick={() => setIndustryOpen(!isIndustryOpen)}>
          {!isIndustryOpen && (
            <>
              <div>
                <h3>Choose by</h3>
                <h1>Industry</h1>
              </div>
              <div>
                <img src={IndustryImage} alt='Industry' />
              </div>
            </>
          )}

          {isIndustryOpen && (
            <Chooser onClick={() => setIndustryOpen(!isIndustryOpen)}>
              <h3>Choose by Industry</h3>
              <Category>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
              </Category>
            </Chooser>
          )}
        </Selector>
        <Selector onClick={() => setTechnologyOpen(!isTechnologyOpen)}>
          {!isTechnologyOpen && (
            <>
              <div>
                <h3>Choose by</h3>
                <h1>Technology</h1>
              </div>
              <div>
                <img src={TechnologyImage} alt='Technology' />
              </div>
            </>
          )}

          {isTechnologyOpen && (
            <Chooser onClick={() => setTechnologyOpen(!isTechnologyOpen)}>
              <h3>Choose by Technology</h3>
              <Category>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
                <div>
                  <img src={CategoryIcon} alt='Category Icon' />
                  <h5>Category 1 </h5>
                </div>
              </Category>
            </Chooser>
          )}
        </Selector>
      </SelecterWrapper>

      <TemplateContainer>
        <FilterConnection>
          <h1>
            Selected Industry
            <Filter>
              Category 1
              <FaTimes />
            </Filter>
          </h1>
        </FilterConnection>
        <Row>
          {modelsData.map(({ id, name, description }) => (
            <Col20 key={id}>
              <Model
                name={name}
                description={description}
                id={id}
                preview={openPreview}
              />
            </Col20>
          ))}
        </Row>
      </TemplateContainer>

      <PreviewPopup show={isPopupOpen}>
        <ModelContainer>
          <FaTimes onClick={() => setPopupOpen(false)} />
          <Preview>
            <img src={PreviewImage} alt='Preview' />
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button>Start Project</button>
          </Preview>
        </ModelContainer>
      </PreviewPopup>
    </>
  );
};

export default Templates;
