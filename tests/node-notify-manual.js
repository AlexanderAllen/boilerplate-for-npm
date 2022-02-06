const cp = require('child_process');
// const isWsl = require('is-wsl');

function sum(a, b) {
  const ret = new Promise((resolve, reject) => {
    // console.log('looks promising');
    // console.log(`running inside wsl? ${isWsl}`);

    cp.exec('notify-send "hi"', (
      error,
      stdout,
      stderr,
    ) => {
      console.log({ stdout, stderr });
      if (error) reject(error);
      resolve(a + b);
    });
  });

  return ret;
}
module.exports = sum;
