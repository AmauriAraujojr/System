import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const settings = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");


  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: "postgres",
    url: dbUrl,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};



const AppDataSource = new DataSource(settings());

export { AppDataSource };