import React, { useState } from "react";
import { ICompetition } from "../models/Competition";

interface IAuthCompetition extends ICompetition {
  start: (name: string) => void;
  finish: () => void;
}

const CompetitionContext = React.createContext<IAuthCompetition>(
  {} as IAuthCompetition,
);

export const CompetitionProvider: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(() => {
    const active = localStorage.getItem("@champion:active");
    return !!active;
  });
  const [name, setName] = useState(() => {
    const _name = localStorage.getItem("@champion:name");
    return _name ? _name : "";
  });

  const start = async (name: string) => {
    localStorage.setItem("@champion:active", "true");
    localStorage.setItem("@champion:name", name);
    setIsActive(true);
    setName("");
  };

  const finish = async () => {
    localStorage.removeItem("@champion:active");
    localStorage.removeItem("@champion:name");
    setIsActive(false);
    setName("");
  };

  return (
    <CompetitionContext.Provider value={{ isActive, name, finish, start }}>
      {children}
    </CompetitionContext.Provider>
  );
};

export const useCompetition = (): IAuthCompetition => {
  const context = React.useContext(CompetitionContext);

  return context;
};
