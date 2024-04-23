import { CardStyled, Desc, Title, Image, Username } from "./styles/card";


interface CardDocument {
  title: string;
  content: string;
}

export function Card(props: CardDocument) {
  return (
          <CardStyled>
            <Image />
            <Title>
              {props.title}
            </Title>
            <Desc>
              {props.content}
            </Desc>
            <Username>
              luisviniciuslv
            </Username>
          </CardStyled>
  )
}
