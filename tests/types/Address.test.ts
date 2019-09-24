import Address from "../../src/types/Address";

describe("Make sure a valid Address is returned with valid functions", () => {
    test("return valid Address", () => {
        const address = new Address(
            "province",
            "subdistrict",
            "district",
            "zipcode"
        );
        expect(address).toBeInstanceOf(Address);
    });
    test("Expect to get proper address string", () => {
        const address = new Address(
            "province",
            "subdistrict",
            "district",
            "zipcode"
        );
      const stringAddress = address.addressToString();
      expect(stringAddress).toBe('subdistrict » district » province » zipcode')
    });
    test("Expect geo to be set", () => {
        const address = new Address(
            "province",
            "subdistrict",
            "district",
            "zipcode"
        );
      address.setGeo(false, false, true);
      expect(address.provinceCode).toBe(true);
      expect(address.districtCode).toBe(false);
      expect(address.subdistrictCode).toBe(false);
    });
});
