import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export async function submitScore(playerID, score) {
    const timestamp = new Date().toISOString();
    const apiName = 'gk-test-API';
    const path = '/submit-score';
    const init = {
        body: { playerID, score },
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        await API.post(apiName, path, init);
        console.log('Score submitted successfully.');
    } catch (error) {
        console.error('Error submitting score:', error);
    }
}
