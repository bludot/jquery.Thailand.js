import Address from './types/Address';
import loadDB from './utils/loadDB';

class AddressService {
  private processedDb: Address[];
  private multilingual: boolean = false;
  private language: string = 'en';
  public loadData(
    location,
    type,
    multilingual = false,
    preprocess = true,
    language?
  ) {
    if (language) {
      this.language = language;
    }
    this.multilingual = multilingual;
    this.processedDb = loadDB.load(location, type, preprocess);
  }
  public query(data) {
    const regex = {
      district: data.district
        ? new RegExp(data.district.toString().trim(), 'g')
        : /.*/g,
      province: data.province
        ? new RegExp(data.province.toString().trim(), 'g')
        : /.*/g,
      subdistrict: data.subdistrict
        ? new RegExp(data.subdistrict.toString().trim(), 'g')
        : /.*/g,
      zipcode: data.zipcode
        ? new RegExp(data.zipcode.toString().trim(), 'g')
        : /.*/g
    };
    if (this.multilingual) {
      try {
        return this.processedDb
          .filter(
            (item: Address) =>
            (item[`province_${this.language}`] || ' ').toString().match(regex.province) &&
            (item[`subdistrict_${this.language}`] || ' ').toString().match(regex.subdistrict) &&
            (item[`district_${this.language}`] || ' ').toString().match(regex.district) &&
            (item['zipcode'] || ' ').toString().match(regex.zipcode)
          )
          .map((res: any) => {
            return {
              district: res[`district_${this.language}`],
              province: res[`province_${this.language}`],
              subdistrict: res[`subdistrict_${this.language}`],
              zipcode: res.zipcode
            };
          });
      } catch (e) {
        return [];
      }
    } else {
      try {
        return this.processedDb.filter(
          (item: Address) =>
            (item['province'] || ' ').toString().match(regex.province) &&
            (item['subdistrict'] || ' ').toString().match(regex.subdistrict) &&
            (item['district'] || ' ').toString().match(regex.district) &&
            (item['zipcode'] || ' ').toString().match(regex.zipcode)
        );
      } catch (e) {
        return [];
      }
    }
  }
  public queryByType(data, type: string) {
    return this.uniq_fast(this.query(data), type);
  }
  private uniq_fast(a, type: string) {
    const seen = {};
    const out = [];
    const len = a.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
      const item = a[i][type];
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = a[i][type];
      }
    }
    return out;
  }
}

const addressService = new AddressService();
export { AddressService, addressService as default };
