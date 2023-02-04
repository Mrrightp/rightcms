import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Page from "./collections/Page";
import Media from "./collections/Media";
import Topic from "./collections/Topic";
import Category from "./collections/category";
import Student from "./collections/student";
import Users from "./collections/Users";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Page, Media, Topic, Category, Users],
});
