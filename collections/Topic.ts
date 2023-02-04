import { CollectionConfig } from "payload/types";
import { MediaType } from "./Media";
import formatSlug from "../utilities/formatSlug";
import { Image, Type as ImageType } from "../blocks/Image";
import { CallToAction, Type as CallToActionType } from "../blocks/CallToAction";
import { Content, Type as ContentType } from "../blocks/Content";
import meta from "../fields/meta";
export type Type = {
  title: string;
  slug: string;
  image?: MediaType;
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const Topic: CollectionConfig = {
  slug: "topics",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Topics
  },
  fields: [
    {
      name: "title",
      label: "Topic Title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      label: "Topic content",
      type: "richText",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      required: true,
    },
    {
      name: "viwes",
      label: "Viwes Count",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      name: "likes",
      label: "Likes Count",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },

    {
      name: "slug",
      label: "Topic Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    meta,
  ],
};

export default Topic;
