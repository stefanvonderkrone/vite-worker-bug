const channel = new BroadcastChannel('MyWorker');

channel.addEventListener('message', event => {
  channel.postMessage({
    message: event.data
  });
});

export default {}