import React from 'react';
import CreateRuleForm from './components/CreateRuleForm';
import EvaluateRuleForm from './components/EvaluateRuleForm';

function App() {
    return (
        <div className="App">
            <h1>Rule Engine UI</h1>
            <CreateRuleForm />
            <EvaluateRuleForm />
        </div>
    );
}

export default App;
