import {
  DropDown,
  Row,
  Col50,
  Card,
  CardTitle,
} from '../../../styles/utils.styled';
import { DropDownContainer, MainContainer } from './Dashboard.styled';
import Analytics from './inc/Analytics';
import LineChartAnalytics from './inc/LineChartAnalytics';
import Links from './inc/Links';
import RecentModels from './inc/RecentModels';

const Dashboard = () => {
  
  return (
    <>
      <DropDownContainer>
        <DropDown>
          <select>
            <option>ALL</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </DropDown>
      </DropDownContainer>

      <MainContainer>
        <Row>
          <Col50>
            <Card>
              <CardTitle>Analytics</CardTitle>
              <Analytics />
            </Card>
          </Col50>
          <Col50>
            <Card>
              <CardTitle>Views</CardTitle>
              <LineChartAnalytics />
            </Card>
          </Col50>
        </Row>
        <Row>
          <Col50>
            <Card blank>
              <CardTitle>Models</CardTitle>
              <RecentModels />
            </Card>
          </Col50>
          <Col50>
            <Card blank>
              <CardTitle>Links</CardTitle>
              <Links />
            </Card>
          </Col50>
        </Row>
      </MainContainer>
    </>
  );
};

export default Dashboard;
