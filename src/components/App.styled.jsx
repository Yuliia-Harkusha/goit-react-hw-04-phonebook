import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;

  padding: ${props => props.theme.spacing(3)};

  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(100)};
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing(5)};
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.radii.primary}px;
`;

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacing(5)};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.gray};
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const ContactsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(100)};
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing(5)};
`;

export const ContactsTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(5)};
  font-size: ${props => props.theme.fontSizes.medLarge};
  font-weight: 700;
  color: ${props => props.theme.colors.gray};
`;

export const SearchInput = styled.input`
  padding: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(4)};
  :focus-visible {
    outline-color: ${props => props.theme.colors.gray};
  }
`;

export const DefaultText = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;
