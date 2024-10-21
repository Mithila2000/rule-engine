import React, { useState } from 'react';
import axios from 'axios';

const EvaluateRuleForm = () => {
    const [ruleName, setRuleName] = useState('');
    const [userData, setUserData] = useState({});
    const [eligible, setEligible] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/rules/evaluate_rule', {
                ruleName,
                data: userData
            });
            setEligible(response.data.eligible);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Evaluate Rule</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Rule Name"
                    value={ruleName}
                    onChange={(e) => setRuleName(e.target.value)}
                    required
                />
                <textarea
                    placeholder='User Data (e.g., { "age": 35, "department": "Sales" })'
                    onChange={(e) => setUserData(JSON.parse(e.target.value))}
                    required
                />
                <button type="submit">Evaluate</button>
            </form>
            {eligible !== null && (
                <p>User is {eligible ? 'eligible' : 'not eligible'} based on the rule.</p>
            )}
        </div>
    );
};

export default EvaluateRuleForm;
