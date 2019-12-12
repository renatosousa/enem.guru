'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestaoSchema extends Schema {
  up () {
    this.create('questaos', (table) => {
      table.increments()
      table.string('enunciado',240).notNullable()
      table.string('alternativas')
      table.timestamps()
    })
  }

  down () {
    this.drop('questaos')
  }
}

module.exports = QuestaoSchema
