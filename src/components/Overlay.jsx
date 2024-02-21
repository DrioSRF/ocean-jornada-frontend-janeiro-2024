import { Fragment } from "react";
import "./Overlay.css";


export function Overlay({ isOpen, onClose, children, tarefa, reuniao, evento, anotacao, alarme, visualizar}) {
  function clickTarefa() {
    onClose();
    tarefa();
  }

  function clickReuniao() {
    onClose();
    reuniao();
  }

  function clickEvento() {
    onClose();
    evento();
  }

  function clickAnotacao() {
    onClose();
    anotacao();
  }

  function clickAlarme() {
    onClose();
    alarme();
  }

  function clickVisualizar(){
    onClose();
    alarme();
  }

  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div className="overlay__controls">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                
                <button
                  className="overlay__tarefa"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={clickTarefa}
                />
                <br/>
                <button
                  className="overlay__reuniao"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={clickReuniao}
                />
                <br/>
                <button
                  className="overlay__evento"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={clickEvento}
                />
                <br/>
                <button
                  className="overlay__anotacao"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={clickAnotacao}
                />
                <br/>
                <button
                  className="overlay__alarme"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={clickAlarme}
                />

                <button
                  className="overlay__visualizar"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={clickVisualizar}
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;