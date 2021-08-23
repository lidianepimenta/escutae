import styled from 'styled-components'

export const Container = styled.div`
  background: var(--base-color);

  h1 {
    font: 700 2.5rem 'Poppins', sans-serif;
    text-align: center;
    padding: 1rem 1rem;
  }
`

export const Content = styled.main`

  max-width: 1128px;
  margin: 0 auto;
  padding: 1rem 1rem 0.5rem;
  
  table {
    width: 100%;

    th, td {
      padding: 0.75rem 2rem;
    }

    th {
      color: var(--text-color);
      font: 500 1.2rem 'DM Sans', sans-serif;
      text-align: center;
    }

    td {
      width: 100%;
      font: 400 0.8rem 'Poppins', sans-serif;
      text-align: center;

      &:first-child {
        padding: 0;
        width: 5%;
      }

      &:nth-child(2){
        padding: 0;
        width: 5%;
      }

      button {
        background: transparent;
        border: 0;
      }

      .cover {
        width: 4.5rem;
        height: 4.5rem; 
        border-radius: 0.5rem;
      }

      .pause, .play {
        width: 1.5rem;
        height: 1.5rem;
        
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }



  

  
`

