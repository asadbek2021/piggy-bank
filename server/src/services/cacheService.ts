import mongoose from "mongoose";
import {caching} from '../tools';


const originalExec = mongoose.Query.prototype.exec;
const client = caching.getClient();

// @ts-ignore
mongoose.Query.prototype.cache = function() {
    // @ts-ignore
    this.useCache = true;
    return this;
}

mongoose.Query.prototype.exec = async function() {
    // @ts-ignore
    if(!this.useCache){
        return originalExec.apply(this, arguments as any);
    }
    const key = JSON.stringify({...this.getQuery(), collection: this.model.collection.name});
    const cached = await client.get(key);
    if(cached){
        const doc = JSON.parse(cached);

        return Array.isArray(doc) 
            ? doc.map(d => new this.model(d)) 
            : new this.model(doc);
    }
    const result = await originalExec.apply(this, arguments as any);
    await client.set(key, JSON.stringify(result));
    return result;
}