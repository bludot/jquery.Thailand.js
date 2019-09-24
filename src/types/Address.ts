class Address {
  public province: string;
  public subdistrict: string;
  public district: string;
  public zipcode: string;
  public separator: string = '»';
  public districtCode: string | boolean;
  public provinceCode: string | boolean;
  public subdistrictCode: string | boolean;
  constructor(
    province: string,
    subdistrict: string,
    district: string,
    zipcode: string
  ) {
    this.province = province;
    this.subdistrict = subdistrict;
    this.district = district;
    this.zipcode = zipcode;
  }

  public setGeo(
    districtCode: string | boolean,
    subdistrictCode: string | boolean,
    provinceCode: string | boolean
  ) {
    this.districtCode = districtCode;
    this.subdistrictCode = subdistrictCode;
    this.provinceCode = provinceCode;
  }

  public addressToString(separator?: string) {
    return [this.subdistrict, this.district, this.province, this.zipcode].join(
      ` ${separator || this.separator} `
    );
  }
}

export default Address;
