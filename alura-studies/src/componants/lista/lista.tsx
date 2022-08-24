import React from "react";

function Lista() {
  // A função não precisa do render como na classe. Já que usando classe, tem que extender do React.Component
  return (
    <aside>
        <h2>Estudos do dia</h2>
        <ul>
            <li>
                <h3>React</h3>
                <span>
                    02:00:00
                </span>
            </li>
            <li>
                <h3>
                    JavaScript
                </h3>
                <span>
                    01:00:00
                </span>
            </li>
        </ul>
    </aside>
    );
}

export default Lista;
