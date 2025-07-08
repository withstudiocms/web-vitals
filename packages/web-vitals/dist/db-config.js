import { column, defineDb, defineTable } from "astro:db";
const Metric = defineTable({
  columns: {
    pathname: column.text(),
    route: column.text(),
    name: column.text(),
    id: column.text({ primaryKey: true }),
    value: column.number(),
    rating: column.text(),
    timestamp: column.date()
  },
  deprecated: Boolean(process.env.DEPRECATE_WEB_VITALS) ?? false
});
var db_config_default = defineDb({
  tables: {
    AstrojsWebVitals_Metric: Metric
  }
});
export {
  db_config_default as default
};
