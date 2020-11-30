import knex from '../../database';

export default class BaseRepository {
    schema = "ms";
    table = null;

    db() {
        return knex(this.table).withSchema(this.schema);
    }
}