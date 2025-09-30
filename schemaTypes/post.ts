import {defineType, defineField} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Публікація',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва',
      type: 'multilangString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.uk',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'direction',
      title: 'Напрямок',
      type: 'string',
      options: {
        list: [
          {title: 'Стоматологія', value: 'dentistry'},
          {title: 'Естетична медицина', value: 'aesthetic'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Короткий опис',
      type: 'multilangText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Основний текст',
      type: 'multilangBlock',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title.uk',
      media: 'image',
      subtitle: 'direction',
    },
    prepare({title, media, subtitle}) {
      return {
        title,
        media,
        subtitle:
          subtitle === 'dentistry'
            ? 'Стоматологія'
            : subtitle === 'aesthetic'
              ? 'Естетична медицина'
              : '',
      }
    },
  },
})
