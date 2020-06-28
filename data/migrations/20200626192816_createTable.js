
exports.up = async function(knex) {
  await knex.schema.createTable('project', table => {
    table.increments('id')
    table.text('project_name').notNullable()
    table.text('project_description')
    table.bool('completed').defaultTo(false)
  })
    
  await knex.schema.createTable('resource', table => {
    table.increments('id')
    table.string('resource_name')
      // .unique()
      .notNullable()
    table.string('resource_description')
    table.integer('project_id')
      .references('id')
      .inTable('project')
      .notNullable()
  })

  await knex.schema.createTable('task', table => {
    table.integer('id')
    table.text('task_description').notNullable()
    table.text('task_notes')
    table.bool('completed').defaultTo(false)
    table.integer('project_id')
      .references('id')
      .inTable('project')
      .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('project')
  await knex.schema.dropTableIfExists('resource')
  await knex.schema.dropTableIfExists('task')
};
