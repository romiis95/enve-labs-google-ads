exports.up = function name(knex) {
    return knex.schema.createTable("tos_google_ads", (table) => {
    table.string("campaign"),
    table.date("time_period"),
    table.integer("clicks")
  })
}
exports.down = function (knex) {};

