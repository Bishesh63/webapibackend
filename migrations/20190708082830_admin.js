exports.up =async function(knex, Promise) {
    await knex.schema.hasTable('admin');
    return await knex.schema.createTable('admin', table=>{
        table.increments('');
        table.string('phone');
        table.string('password');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin')
};