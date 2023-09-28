import { createClient } from 'redis';

const connectRedis = async () => {
  try {
    const client = await createClient({
      url: 'redis://redis:6379',
    }).connect();

    console.log('Redis Connected');
    return client;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectRedis;
