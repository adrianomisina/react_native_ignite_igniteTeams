import React, {useState} from "react"
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles"
import { ButtonIcon } from "@components/ButtonIcon"
import { FlatList } from "react-native"
import { PlayerCard } from "@components/PlayerCard"
import Input from '@components/Input'
import Filter from "@components/Filter"
import Header from "@components/Header"
import Highlight from "@components/Highlight"
import ListEmpty from "@components/ListEmpty"
import Button from "@components/Button"

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Rodrigo', 'Maria', 'João', 'Marcos', 'Vini', 'Diego', 'Ana', 'Biro', 'Mike']);

  return (
    <Container>
        <Header showBackButton />

        <Highlight
            title="Nome da turma"
            subtitle="adicione a galera e separe os times."
        />

        <Form>
          <Input
            placeholder="Nome da pessoa"
            autoCorrect={false}
          />

          <ButtonIcon icon="add" />
      </Form>
      
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers> 
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty Mensagem="Não Há Pessoas Neste Time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />

    </Container>
  )
}
