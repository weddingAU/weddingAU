import {
  Container,
  Title,
  Names,
  Man,
  Women,
  Data,
  LavanderTop,
  LavanderTopLeft,
  Leaf,
  Play,
  MainImage,
} from "./styles";

export default function FirstBlock() {
  return (
    <Container>
      <MainImage />
      <LavanderTop />
      <LavanderTopLeft />
      <Leaf />
      <Title></Title>
      <Names>
        <Man>Егор</Man> <p>и</p> <Women>Екатерина</Women>
      </Names>
      <Data>27 • 07 • 2024</Data>
      <Play>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M15 12.3301L9 16.6603L9 8L15 12.3301Z' fill='currentColor' />
        </svg>
      </Play>
    </Container>
  );
}
