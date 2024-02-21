import { Fragment } from "react";
import "./Overlay.css";


export function Overlay({ isOpen, onClose, children, tarefa}) {
  function clickTarefa() {

    onClose();
    
    tarefa();
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
                />
                <br/>
                <button
                  className="overlay__evento"
                  type="button"
                  style={{marginBottom: '10px'}}
                />
                <br/>
                <button
                  className="overlay__anotacao"
                  type="button"
                  style={{marginBottom: '10px'}}
                />
                <br/>
                <button
                  className="overlay__alarme"
                  type="button"
                  style={{marginBottom: '10px'}}
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