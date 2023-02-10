import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  margin: 2rem 10rem;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const Button = styled.button`
  background: ${(props) => props.theme.yellow.light};
  color: ${(props) => props.theme.yellow.dark};
  width: auto;
  border: 0;
  padding: 0.5rem;
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: normal;

  cursor: pointer;
`
export const Location = styled.div`
  background: ${(props) => props.theme.purple.light};
  color: ${(props) => props.theme.purple.dark};
  width: auto;
  border: 0;
  padding: 0.5rem;
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  font-weight: normal;
`
