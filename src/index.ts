import MD5HashProvider from './providers/HashProvider/implementations/MD5HashProvider';

module.exports.init = async () => {
  const md5HashProvider = new MD5HashProvider();

  const hashed = await md5HashProvider.generateHash('password');

  console.log(hashed);
}