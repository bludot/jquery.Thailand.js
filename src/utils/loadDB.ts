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
    const rawData = this.loadData(location, type);
    if (type === 'json') {
      this.db = preprocess(rawData);
    }
    return this.db;
  }
  private loadData(location: string, type: string) {
    if (type === 'json') {
      const data = require(location);
      return data;
    }
    throw new Error('This type is not supported!');
  }
}

const loadDB = new LoadDB();

export default loadDB;
