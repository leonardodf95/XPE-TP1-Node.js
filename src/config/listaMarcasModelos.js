import fs from 'fs'

const data = JSON.parse(fs.readFileSync('./car-list.json'));

export default data;