import http from 'k6/http';

export const options = {
    vus: 1000,
    duration: '30s'
} 

export default function() {
    http.get('https://test.k6.io/');
}