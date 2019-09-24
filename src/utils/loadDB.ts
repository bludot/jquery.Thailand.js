import preprocess from './preprocess';

class LoadDB {
  private db: any;
  public load(passedLocation: string, type: string) {
    const defaultLocation = './../database/db.json';
    let location;
    if (
      passedLocation === null ||
      passedLocation === undefined ||
      passedLocation === void 0
    ) {
      location = defaultLocation;
    }
    if (type === 'json') {
      const data = require(location);
      this.db = preprocess(data);
    }
    return this.db;
  }
}

const loadDB = new LoadDB();

export default loadDB;
