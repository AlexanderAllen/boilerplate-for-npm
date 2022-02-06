// const NotifySend = require('node-notifier/notifiers/notifysend');
const isWsl = require('is-wsl');

const cp = require('child_process');

function sum(a, b) {
  // const WindowsToaster = require('node-notifier/notifiers/toaster');

  const options = {
    message: 'Hello from node, Mr. User!',
    category: 'Alpine WSL',
    title: '',
  };

  const ret = new Promise((resolve, reject) => {
    console.log('looks promising');
    console.log(`running inside wsl? ${isWsl}`);

    cp.exec('notify-send "hi"', (
      error,
      stdout,
      stderr,
    ) => {
      console.log({ stdout, stderr });
      if (error) reject(error);
      resolve(a + b);
    });

    // new NotifySend().notify(options, (err, res, meta) => {
    //   console.log({ err });

    //   resolve(a + b);
    // });
  });

  // resolving to an invalid command
  //  cmd: 'notify-send "Node Notification:" "Hello from node, Mr. User!" --expire-time "10000"'

  return ret;
}
module.exports = sum;
