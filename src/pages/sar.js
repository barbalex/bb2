import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const NgoContainer = styled.div`
  outline: solid;
  outline-color: #cecece;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
`
const Title = styled.h3`
  margin: 0;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`
const Text = styled.div``

const sar = () => (
  <Container>
    <h1>SAR NGOs</h1>
    <NgoContainer>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Ocean_Viking"
          target="_blank"
          rel="noreferrer"
        >
          Ocean Viking
        </a>
      </Title>
      <Text>Norwegian flag, 2019 –</Text>
      <Text>8 SAR operations in 2021</Text>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/SOS M%C3%A9diterran%C3%A9e"
          target="_blank"
          rel="noreferrer"
        >
          SOS Mediterranée
        </a>
      </Title>
      <Text>Internat. NGO, Marseille, 2015 –</Text>
      <Text>2019-2020 cooperation with MsF</Text>
    </NgoContainer>
    <NgoContainer>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Geo_Barents"
          target="_blank"
          rel="noreferrer"
        >
          Geo Barents
        </a>
      </Title>
      <Text>Norwegian flag, 2021 –</Text>
      <Text>6 SAR operations in 2021</Text>
      <Title>
        <a
          href="https://en.wikipedia.org/wiki/M%C3%A9decins Sans Fronti%C3%A8res"
          target="_blank"
          rel="noreferrer"
        >
          Médecins sans Frontières (MsF)
        </a>
      </Title>
      <Text>International NGO, SAR 2015 –</Text>
      <Text>2019-2020 coop. with SOS Mediterranée</Text>
    </NgoContainer>
    <NgoContainer>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Watch_3"
          target="_blank"
          rel="noreferrer"
        >
          Sea Watch 3
        </a>
      </Title>
      <Text>German flag, 2017 –</Text>
      <Text>4 SAR operations in 2021</Text>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Watch_4"
          target="_blank"
          rel="noreferrer"
        >
          Sea Watch 4
        </a>
      </Title>
      <Text>German flag, 2020 –</Text>
      <Text>4 SAR operations in 2021</Text>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Watch"
          target="_blank"
          rel="noreferrer"
        >
          Sea Watch
        </a>
      </Title>
      <Text>German NGO, 2015 –</Text>
      <Text>{'coop. with Open Arms & Mediterranea (MSH)'}</Text>
      <Text>use of airplanes</Text>
    </NgoContainer>
    <NgoContainer>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Eye_4"
          target="_blank"
          rel="noreferrer"
        >
          Sea Eye 4
        </a>
      </Title>
      <Text>German flag, 2021 –</Text>
      <Text>3 SAR operations in 2021</Text>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Eye"
          target="_blank"
          rel="noreferrer"
        >
          Sea Eye
        </a>
      </Title>
      <Text>German NGO, 2015 –</Text>
    </NgoContainer>
    <NgoContainer>
      <Title>
        <a
          href="https://de.wikipedia.org/wiki/Open_Arms"
          target="_blank"
          rel="noreferrer"
        >
          Open Arms
        </a>
      </Title>
      <Text>Spanish flag, 2017 –</Text>
      <Text>3 SAR operations in 2021</Text>
      <Title>
        <a
          href="https://en.wikipedia.org/wiki/Proactiva_Open_Arms"
          target="_blank"
          rel="noreferrer"
        >
          Proactiva Open Arms
        </a>
      </Title>
      <Text>Spanish NGO, 2015 –</Text>
      <Text>coop. with Sea Watch and Mediterranea (MSH)</Text>
    </NgoContainer>
    <NgoContainer>
      <Title>
        <a href="https://resq.it/progetto" target="_blank" rel="noreferrer">
          ResQ People
        </a>
      </Title>
      <Text>Italian flag, 2020 –</Text>
      <Text>1 SAR operation in 2021</Text>
      <Title>
        <a
          href="https://www.infomigrants.net/en/post/26362/italian-migrant-rescue-boat-resqpeople-project-launched"
          target="_blank"
          rel="noreferrer"
        >
          ResQ – People Saving People
        </a>
      </Title>
      <Text>Italian NGO, 2020 –</Text>
    </NgoContainer>
    <NgoContainer>
      <Title>
        <a
          href="https://en.wikipedia.org/wiki/Aita_Mari"
          target="_blank"
          rel="noreferrer"
        >
          Aita Mari
        </a>
      </Title>
      <Text>Spanish flag, 2018 –</Text>
      <Text>1 SAR operation in 2021</Text>
      <Title>
        <a
          href="https://en.wikipedia.org/wiki/Salvamento_Mar%C3%ADtimo_Humanitario"
          target="_blank"
          rel="noreferrer"
        >
          Salvamento Maritimo Humanitario - SMH
        </a>
      </Title>
      <Text>Spanish NGO, 2015 –</Text>
    </NgoContainer>
  </Container>
)

export default sar
