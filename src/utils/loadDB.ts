import Address from './../types/Address';
import preprocess from './preprocess';

class LoadDB {
  private db: any;
  public load(
    locationOrdata: string | any[],
    type: string,
    process: boolean = false
  ) {
    if ((typeof locationOrdata).toLowerCase()  !== 'string') {
      if (process) {
        this.db = preprocess(locationOrdata);
      } else {
        this.db = locationOrdata;
      }
      return this.db;
    }
    const defaultLocation = './database/db.json';
    let location;
    if (
      locationOrdata === null ||
      locationOrdata === undefined ||
      locationOrdata === void 0
    ) {
      location = defaultLocation;
    } else {
      location = locationOrdata;
    }
    const rawData = this.loadData(location, type);
    if (type === 'json') {
      if (process) {
        this.db = preprocess(rawData);
      } else {
        this.db = rawData;
      }
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
