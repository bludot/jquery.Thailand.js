class Address {
    province: string;
    subdistrict: string;
    district: string;
    zipcode: string;
    separator: string = "»";
    district_code: string | boolean;
    province_code: string | boolean;
    subdistrict_code: string | boolean;
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
        district_code: string | boolean,
        subdistrict_code: string | boolean,
        province_code: string | boolean
    ) {
        this.district_code = district_code;
        this.subdistrict_code = subdistrict_code;
        this.province_code = province_code;
    }

    public addressToString(separator?: string) {
        return [
            this.subdistrict,
            this.subdistrict,
            this.province,
            this.zipcode
        ].join(` ${separator || separator} `);
    }
}

export default Address;
