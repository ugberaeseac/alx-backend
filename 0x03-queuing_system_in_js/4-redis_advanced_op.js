import redis from 'redis';

const client = redis.createClient();

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error}`);
});
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

const keyName = 'HolbertonSchools';
const values = {
		'Portland': 50,
	        'Seattle': 80,
	        'New York': 20,
	        'Bogota': 20,
	        'Cali': 40,
	        'Paris': 2
  };

for (const key of Object.entries(values)) {
  client.hmset(keyName, key, values[key]), (error, reply) => {
  redis.print(`Reply: ${reply}`);
  };
};

client.hgetall(keyName, (error, reply) => {
  console.log(reply);
});
