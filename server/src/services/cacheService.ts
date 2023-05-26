import mongoose from "mongoose";
import {caching} from '../tools';


const originalExec = mongoose.Query.prototype.exec;
const client = caching.getClient();

mongoose.Query.prototype.exec = async function() {
    console.log(this.model.collection.name)
    const key = JSON.stringify({...this.getQuery(), collection: this.model.collection.name});
    const cached = await client.get(key);
    if(cached){
        return JSON.parse(cached);
    }
    const result = await originalExec.apply(this, arguments as any);
    await client.set(key, JSON.stringify(result));
    return result;
}