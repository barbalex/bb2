import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const SubPageTitle = styled.div`
  margin-top: -12px;
`
const F = styled.span`
  font-weight: bold;
`
const NgoContainer = styled.div`
  outline: solid;
  outline-color: #cecece;
  outline-width: 2px;
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
const ShipTitle = styled.h3`
  margin: 0;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
  &::before {
    content: "'";
  }
  &::after {
    content: "'";
  }
`
const NgoTitle = styled.h3`
  margin: 0;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`
const Text = styled.div``

const sar = () => (
  <Container>
    <h1>SAR NGOs</h1>
    <SubPageTitle>
      <F>S</F>earch <F>A</F>nd <F>R</F>escue <F>N</F>on-<F>G</F>overnmental{' '}
      <F>O</F>rganisation<F>s</F>
    </SubPageTitle>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://de.wikipedia.org/wiki/SOS M%C3%A9diterran%C3%A9e"
          target="_blank"
          rel="noreferrer"
        >
          SOS Mediterranée
        </a>
      </NgoTitle>
      <Text>Internat. NGO, Marseille, 2015 –</Text>
      <Text>2019-2020 cooperation with MsF</Text>
      <ShipTitle>
        <a
          href="https://de.wikipedia.org/wiki/Ocean_Viking"
          target="_blank"
          rel="noreferrer"
        >
          Ocean Viking
        </a>
      </ShipTitle>
      <Text>Norwegian flag, 2019 –</Text>
      <Text>8 SAR operations in 2021</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://en.wikipedia.org/wiki/M%C3%A9decins Sans Fronti%C3%A8res"
          target="_blank"
          rel="noreferrer"
        >
          Médecins sans Frontières (MsF)
        </a>
      </NgoTitle>
      <Text>International NGO, SAR 2015 –</Text>
      <Text>2019-2020 coop. with SOS Mediterranée</Text>
      <ShipTitle>
        <a
          href="https://de.wikipedia.org/wiki/Geo_Barents"
          target="_blank"
          rel="noreferrer"
        >
          Geo Barents
        </a>
      </ShipTitle>
      <Text>Norwegian flag, 2021 –</Text>
      <Text>6 SAR operations in 2021</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://sos-humanity.org/en/about-us/"
          target="_blank"
          rel="noreferrer"
        >
          SOS Humanity
        </a>
      </NgoTitle>
      <Text>German NGO, 2015 –</Text>
      <Text>{'2016-21 part of SOS Mediterranee Network'}</Text>
      <Text>{'with ‘Aquarius’ & ‘Ocean Viking’'}</Text>
      <Text>{'Now seeking EU coordination'}</Text>
      <ShipTitle>
        <a
          href="https://sos-humanity.org/en/press/rescue-vessel-humanity-1-departed-for-central-mediterranean/"
          target="_blank"
          rel="noreferrer"
        >
          Humanity 1
        </a>
      </ShipTitle>
      <Text>German flag, Kiel 2021</Text>
      <Text>SAR operations start August 2022</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Watch"
          target="_blank"
          rel="noreferrer"
        >
          Sea Watch
        </a>
      </NgoTitle>
      <Text>German NGO, 2015 –</Text>
      <Text>{'coop. with Open Arms & Mediterranea (MSH)'}</Text>
      <Text>use of airplanes</Text>
      <ShipTitle>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Watch_3"
          target="_blank"
          rel="noreferrer"
        >
          Sea Watch 3
        </a>
      </ShipTitle>
      <Text>German flag, 2017 –</Text>
      <Text>4 SAR operations in 2021</Text>
      <ShipTitle>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Watch_4"
          target="_blank"
          rel="noreferrer"
        >
          Sea Watch 4
        </a>
      </ShipTitle>
      <Text>German flag, 2020 –</Text>
      <Text>4 SAR operations in 2021</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Eye"
          target="_blank"
          rel="noreferrer"
        >
          Sea Eye
        </a>
      </NgoTitle>
      <Text>German NGO, 2015 –</Text>
      <ShipTitle>
        <a
          href="https://de.wikipedia.org/wiki/Sea-Eye_4"
          target="_blank"
          rel="noreferrer"
        >
          Sea Eye 4
        </a>
      </ShipTitle>
      <Text>German flag, 2021 –</Text>
      <Text>3 SAR operations in 2021</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://en.wikipedia.org/wiki/Proactiva_Open_Arms"
          target="_blank"
          rel="noreferrer"
        >
          Proactiva Open Arms
        </a>
      </NgoTitle>
      <Text>Spanish NGO, 2015 –</Text>
      <Text>coop. with Sea Watch and Mediterranea (MSH)</Text>
      <ShipTitle>
        <a
          href="https://de.wikipedia.org/wiki/Open_Arms"
          target="_blank"
          rel="noreferrer"
        >
          Open Arms
        </a>
      </ShipTitle>
      <Text>Spanish flag, 2017 –</Text>
      <Text>3 SAR operations in 2021</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://www.infomigrants.net/en/post/26362/italian-migrant-rescue-boat-resqpeople-project-launched"
          target="_blank"
          rel="noreferrer"
        >
          ResQ – People Saving People
        </a>
      </NgoTitle>
      <Text>Italian NGO, 2020 –</Text>
      <ShipTitle>
        <a href="https://resq.it/progetto" target="_blank" rel="noreferrer">
          ResQ People
        </a>
      </ShipTitle>
      <Text>Italian flag, 2020 –</Text>
      <Text>1 SAR operation in 2021</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://en.wikipedia.org/wiki/Salvamento_Mar%C3%ADtimo_Humanitario"
          target="_blank"
          rel="noreferrer"
        >
          Salvamento Maritimo Humanitario - SMH
        </a>
      </NgoTitle>
      <Text>Spanish NGO, 2015 –</Text>
      <ShipTitle>
        <a
          href="https://en.wikipedia.org/wiki/Aita_Mari"
          target="_blank"
          rel="noreferrer"
        >
          Aita Mari
        </a>
      </ShipTitle>
      <Text>Spanish flag, 2018 –</Text>
      <Text>1 SAR operation in 2021</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://en.wikipedia.org/wiki/Louise_Michel_(ship)"
          target="_blank"
          rel="noreferrer"
        >
          Banksy
        </a>
      </NgoTitle>
      <Text>British artist-activist, 2019/20 –</Text>
      <Text>{'coop. with Sea Watch & Mare Jonio'}</Text>
      <ShipTitle>
        <a
          href="https://en.wikipedia.org/wiki/Louise_Michel_(ship)"
          target="_blank"
          rel="noreferrer"
        >
          Louise Michel
        </a>
      </ShipTitle>
      <Text>German flag, 2020 –</Text>
      <Text>no SAR operation in 2021</Text>
      <Text>one in January 2022</Text>
    </NgoContainer>
    <NgoContainer>
      <NgoTitle>
        <a
          href="https://en.wikipedia.org/wiki/Mediterranea_Saving_Humans"
          target="_blank"
          rel="noreferrer"
        >
          Mediterranea Saving Humans (MSH)
        </a>
      </NgoTitle>
      <Text>Italian NGO, 2018 –</Text>
      <Text>coop. with Sea Watch and Open Arms</Text>
      <ShipTitle>
        <a
          href="https://en.wikipedia.org/wiki/Mare_Jonio_(rescue_ship)"
          target="_blank"
          rel="noreferrer"
        >
          Mare Jonio
        </a>
      </ShipTitle>
      <Text>Italian flag, 2018 –</Text>
      <Text>no SAR operation in 2021</Text>
      <Text>one in January 2022</Text>
    </NgoContainer>
  </Container>
)

export default sar
