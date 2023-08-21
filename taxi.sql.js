import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() {
    const sql = `update taxi_queue SET passenger_queue_count = passenger_queue_count +1`;
    await db.run(sql);
    // console.log('join queue')
}

export async function leaveQueue(passenger_queue_count) {
    const sql = `update taxi_queue set passenger_queue_count = passenger_queue_count -1`;
    await db.run(sql, [passenger_queue_count]);
}

export async function joinTaxiQueue(taxi_queue_count) {
    const sql = `update taxi_queue set taxi_queue_count = taxi_queue_count +1`;
    await db.run(sql, [taxi_queue_count]);  
}
export async function leaveTaxiQueue(taxi_queue_count) {
    const sql = `update taxi_queue set taxi_queue_count = taxi_queue_count -1`;
    await db.run(sql, [taxi_queue_count]);
}

export async function queueLength() {
       
}

export async function taxiQueueLength() {

}

export async function taxiDepart() {
   
    

}