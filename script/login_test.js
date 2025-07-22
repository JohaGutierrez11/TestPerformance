import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const users = new SharedArray('users', function () {
  return open('../data/users.csv')
  .split('\n')
  .slice(1)
  .map(row => {
    const [username, password] = row.trim().split(',');
    return { username, password };
  });
});

export let options = {
    vus: 50, // Number of virtual users
    duration: '30s', // Duration of the test
    thresholds: {
        http_req_duration: ['p(95)<1500'], // 95% of requests should be below 1500ms
        http_req_failed: ['rate<0.03'], // Less than 3% of requests should fail
    },
};


export default function () {
    const user = users[Math.floor(Math.random() * users.length)];
    
    const payload = JSON.stringify({
        username: user.username,
        password: user.password,
    });

    const headers = {
        'Content-Type': 'application/json'};

    const res = http.post('https://fakestoreapi.com/auth/login', payload, { headers });

    check(res, {
        'is status 200': (r) => r.status === 200,
        'response time': (r) => r.timings.duration < 1500,
    })

    sleep(1); // Simulate user think time
}