import React from 'react';
import Container from '../components/Layout/Container';
import Section from '../components/Layout/Section';
import s from './HomeView.module.css';

const PrivatePageView = () => (
  <Container>
    <Section>
      <div className={s.wrapper}>
        <h1 className={s.title}>HELLO!!!</h1>
        <p className={s.description}>This is the user's private page</p>
      </div>
    </Section>
  </Container>
);

export default PrivatePageView;
