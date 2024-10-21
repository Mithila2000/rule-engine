import React, { useState } from 'react';
import axios from 'axios';

const CreateRuleForm = () => {
    const [ruleName, setRuleName] = useState('');
    const [ruleString, setRuleString] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/rules/create_rule', {
                ruleName,
                ruleString
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error creating rule');
        }
    };

    return (
        <div>
            <h2>Create a New Rule</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Rule Name"
                    value={ruleName}
                    onChange={(e) => setRuleName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Rule (e.g., age > 30 AND department = 'Sales')"
                    value={ruleString}
                    onChange={(e) => setRuleString(e.target.value)}
                    required
                />
                <button type="submit">Create Rule</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateRuleForm;
