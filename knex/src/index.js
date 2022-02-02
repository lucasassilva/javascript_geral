const database = require("../database");
const crypto = require("crypto");
const CRYPTO_KEY = crypto.randomBytes(32); //256 bits (32 caracteres)
const CRYPTO_IV = crypto.randomBytes(16); // para AES, é sempre 16 caracteres

function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", CRYPTO_KEY, CRYPTO_IV);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  encrypted = CRYPTO_IV.toString("hex") + encrypted;
  return encrypted;
}

function decrypt(text) {
  const contents = Buffer.from(text, "hex");
  const iv = contents.slice(0, 16);
  const textBytes = contents.slice(16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", CRYPTO_KEY, iv);
  let decrypted = decipher.update(textBytes, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const users = [
  { email: "rodrigo123@hotmail.com", senha: encrypt("rodrigo5291") },
  { email: "gab928@gmail.com", senha: encrypt("gabriel9821") },
  { email: "nando9207@hotmail.com", senha: encrypt("nandoviera2021") },
  { email: "roberto721@yahoo.com", senha: encrypt("rob7292") },
];

async function querySelectAndInsert(data, table) {
  try {
    await database.insert(data).into(table);
    await database.select().table(table);
  } catch (err) {
    console.log(err);
  }
}

querySelectAndInsert(users, "users");
