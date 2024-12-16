import React from "react";
import "./App.css"; // Убедитесь, что импортировали основной файл стилей
import KnowledgeBlocksComponent from "./components/KnowledgeBlockComponent/KnowledgeBlockComponent";
import RulesListComponent from "./components/RulesList/RulesListComponent";
import ServerInfoComponent from "./components/ServerInfoComponent/ServerInfoComponent";
import TabsComponent from "./components/Tabs/TabsComponent";

const App = () => {
  return (
    <div className="app">
      <TabsComponent />
      <div className="main-content">
        <KnowledgeBlocksComponent />
        <div className="rules-actions-container">
          <RulesListComponent />
          {/* <ActionsListComponent /> */}
        </div>
      </div>
      <div className="server-info-container">
        <ServerInfoComponent />
      </div>
    </div>
  );
};

export default App;

