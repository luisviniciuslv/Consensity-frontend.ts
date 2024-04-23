import styled from "styled-components";

export const Input = styled.input`
  color: white;
  padding: 0.5rem; /* Adiciona um espaçamento interno */
  border: 1px solid #000000; /* Adiciona uma borda cinza */
  border-radius: 4px; /* Adiciona bordas arredondadas */
  outline: none; 
  font-size: 16px; /* Define o tamanho da fonte */
  position: relative;
  width: 100%;
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none; /* Oculta os elementos de controle padrão do campo de busca no WebKit */
  }
`
