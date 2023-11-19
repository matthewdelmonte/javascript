import Ajv from "ajv";
import fs from "fs";

// Read the schema from person-schema.json
const schemaFilePath = "./person-schema.json";
const schemaJson = JSON.parse(fs.readFileSync(schemaFilePath, "utf-8"));

// Create an instance of AJV
const ajv = new Ajv();

// Compile the schema with AJV
const validate = ajv.compile(schemaJson);

// Read the instance data from person.json
const instanceFilePath = "./person.json";
const instanceJson = JSON.parse(fs.readFileSync(instanceFilePath, "utf-8"));

// Perform validation
const isValid = validate(instanceJson);

if (isValid) {
  console.log("Instance is valid :-)");
} else {
  console.log("Instance is invalid :-(");
  console.log("Validation errors:", validate.errors);
}

