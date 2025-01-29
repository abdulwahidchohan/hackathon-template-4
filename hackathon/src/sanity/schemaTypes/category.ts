// ./src/sanity/schemaTypes/category.ts
import { defineType, defineField } from 'sanity';


export const category = defineType({
  
  
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(), // Use the provided Rule object
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    })
  ],
});

export default category;