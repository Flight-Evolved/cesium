import { MetadataEnumValue } from "../../Source/Cesium.js";

describe("Scene/MetadataEnumValue", function () {
  it("creates enum value", function () {
    var extras = {
      gain: 0.5,
      offset: 0.1,
    };

    var enumValue = new MetadataEnumValue({
      name: "RED",
      description: "Red color",
      value: 0,
      extras: extras,
    });

    expect(enumValue.name).toBe("RED");
    expect(enumValue.description).toBe("Red color");
    expect(enumValue.value).toBe(0);
    expect(enumValue.extras).toEqual(extras);
    expect(enumValue.extras).not.toBe(extras); // Extras is cloned
  });

  it("constructor throws without value", function () {
    expect(function () {
      return new MetadataEnumValue();
    }).toThrowDeveloperError();
  });
});