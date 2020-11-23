import crypto, { Hash } from 'crypto';

import IHashProvider from "../models/IHashProvider"; 

export default class MD5HashProvider implements IHashProvider {
  private hash: Hash;

  constructor() {
    this.hash = crypto.createHash('md5');
  }


  public async generateHash(payload: string): Promise<string> { 
    const hashedPayload = this.hash.update(payload).digest('hex');

    return hashedPayload;
  }
  public async compareHash(payload: string, hashed: string): Promise<boolean> { 
    const hashedPayload = this.hash.update(payload).digest('hex');

    return hashedPayload === hashed;
  }
}