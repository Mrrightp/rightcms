import { CollectionConfig } from "payload/types";
import Roles from "../constants/roles";
import formatSlug from "../utilities/formatSlug";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      saveToJWT: true,
    },
    {
      name: "Role",
      type: "select",
      options: Roles,
    },
    {
      name: "department",
      label: "Department",
      type: "text",
    },
    {
      name: "profileImage",
      label: "Profile Image",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "slug",
      label: "Student Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("username")],
      },
    },
  ],
};

export default Users;
