/**@type {import("ts-jest/dist/types").JestConfigWithTsJest}*/
module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtension: ["js", "ts"],
  roots: ["<rootDir>/src"],
  present: "ts-jest",
  testEnviroment: "node",
};
