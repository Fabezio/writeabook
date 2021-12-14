import fs from "fs"
	import path from 'path';
import url from 'url';
const thisUrl = import.meta.url
console.log(url.fileURLToPath(thisUrl))
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = "path.dirname();"
export default __dirname
// const content = fs.readFile(__dirname+'./lorem', 'utf-8', (err, data)=> {
//  return fetch(data)
// })