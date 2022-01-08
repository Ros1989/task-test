import React from 'react';
import Container from '../components/Layout/Container';
import Section from '../components/Layout/Section';
import s from './HomeView.module.css';

const HomeView = () => (
  <Container>
    <Section>
      <div className={s.wrapper}>
        <h1 className={s.title}>Welcome!!!</h1>
        <p className={s.description}>This is a test application</p>
      </div>
    </Section>
  </Container>
);

export default HomeView;
