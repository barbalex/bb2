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
  </Container>
)

export default sar
