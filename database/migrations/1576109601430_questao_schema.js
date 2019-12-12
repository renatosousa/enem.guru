'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestaoSchema extends Schema {
  up () {
    this.create('questaos', (table) => {
      table.increments()
      table.string('ano')
      table.string('area')
      table.string('enunciado').notNullable()
      table.string('imagem')
      table.json('alternativas')
      table.string('assunto')
      table.timestamps()
    })
  }

  down () {
    this.drop('questaos')
  }
}

module.exports = QuestaoSchema
