import BaseRepository from './BaseRepository'

class RegiaoRepository extends BaseRepository {

    table = 'regiao';

    async findAll() {
        const results = await this.db()
        // .select('id', 'descricao')
        return results;
    }

    async insert(regiao) {
        const result = await this.db()
            .returning('*')
            .insert(regiao);
        return result;
    }

    async update(regiao) {

        const { id } = regiao;

        await this.findById(id);

        const result = await this.db()
            .where({ id })
            .update(regiao);
        return result;
    }

    async delete(id) {
        await this.findById(id);
        await this.db().where('id', id).del();
    }



}


export default RegiaoRepository;