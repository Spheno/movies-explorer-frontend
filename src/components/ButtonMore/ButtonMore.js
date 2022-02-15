import './ButtonMore.css'

export function ButtonMore({ showMore, isMore }) {

  return (
     <section className="button-more page__container">
       <button className={` ${isMore ? 'button-more__button hover-button' : 'hidden'}`} arial-lable="Еще" type="button" onClick={showMore}>Ещё</button>
     </section>
  );

}