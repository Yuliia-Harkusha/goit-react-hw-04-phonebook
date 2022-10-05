import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: ${props => props.theme.spacing(3)};
  gap: ${props => props.theme.spacing(2)};
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;

export const ListItemPart = styled.div`
  display: inline-block;
`;

export const FeatherIcon = styled.span`
  color: ${props => props.theme.colors.accent};
  margin-right: ${props => props.theme.spacing(2)};
`;

export const TrashIcon = styled.span`
  display: inline-block;
  cursor: pointer;
  color: ${props => props.theme.colors.accent};
  :hover {
    color: ${props => props.theme.colors.hover};
    scale: 1.2;
  }
`;
