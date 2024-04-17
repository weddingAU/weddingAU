import { Container, Names, Invite } from "./styles";

export default function FirstBlock() {
  return (
    <Container>
      <Names>
        <b>Андрей и Юлия</b>
        <p>24.08.2024</p>
      </Names>
      <Invite>
        Приглашение <br />
        на свадьбу
      </Invite>
    </Container>
  );
}
