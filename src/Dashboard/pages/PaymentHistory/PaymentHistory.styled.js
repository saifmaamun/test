import styled from 'styled-components';
import DataTable from 'react-data-table-component';

export const HistoryTable = styled(DataTable)`
  background: red;
`;
export const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.primary_blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
