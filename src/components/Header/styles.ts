import styled from 'styled-components'

export const Container = styled.header`
  background: var(--base-color);
  height: 5.5rem;
`

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;

  padding: 1rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search {
    width: 400px;
    height: 2rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background: #FFF;
    border: 1px solid rgba(101, 123, 166, .3);
    font: 0.8rem 'DM Sans', sans-serif;
    margin-top: 0.5rem;
  }

  .menu ul {
    display: flex;
    gap: 2rem;
    font: 1rem 'DM Sans', sans-serif;
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    }
`