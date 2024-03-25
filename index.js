import {Worker as JestWorker} from 'jest-worker';

// const require = createRequire(import.meta.url)

async function main() {
  const worker = new JestWorker("./worker.js");
  const result = await worker.hello('Alice'); // "Hello, Alice"
}

main();
