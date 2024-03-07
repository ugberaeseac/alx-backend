import redis from 'redis';
import {promisify } from 'util';

const client = redis.createClient();
const get = promisify(client.get).bind(client);

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error}`);
});
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (err, reply) => {
  redis.print(`Reply: ${reply}`);
});
};

async function displaySchoolValue(schoolName) {
  const reply = await get(schoolName);
  console.log(reply);
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
