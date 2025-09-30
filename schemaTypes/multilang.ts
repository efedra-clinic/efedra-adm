import {defineType, defineField} from 'sanity'

// Мультимовний компонент для текстових полів
export const multilangText = defineType({
  name: 'multilangText',
  title: 'Мультимовний текст',
  type: 'object',
  fields: [
    defineField({
      name: 'uk',
      title: 'Українська',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ru',
      title: 'Російська',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

// Мультимовний компонент для рядкових полів
export const multilangString = defineType({
  name: 'multilangString',
  title: 'Мультимовний рядок',
  type: 'object',
  fields: [
    defineField({
      name: 'uk',
      title: 'Українська',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ru',
      title: 'Російська',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

// Мультимовний компонент для блоків контенту (rich text)
export const multilangBlock = defineType({
  name: 'multilangBlock',
  title: 'Мультимовний блок',
  type: 'object',
  fields: [
    defineField({
      name: 'uk',
      title: 'Українська',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          marks: {
            decorators: [{title: 'Bold', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ru',
      title: 'Російська',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          marks: {
            decorators: [{title: 'Bold', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
