import React from 'react';
import './styles.css';

function SectionBudgetTag() {
  return (
        <section className="s-budget">
            <div className="container">
                <h1 className="t-mobile">Vamos criar algo <br /> incrível juntos ?</h1>
                <h1>Qual é o seu evento ?</h1>
                <input type="submit" value="Faça um orçamento"/>
            </div>
        </section>
    );
}

export default SectionBudgetTag;