'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicsSchema extends Schema {
  up () {
    this.create('musics', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('musics')
  }
}

module.exports = MusicsSchema
