import {defineType, defineField} from 'sanity'

export const doctor = defineType({
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Імʼя',
      type: 'multilangString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Посада',
      type: 'multilangString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startYear',
      title: 'Рік початку роботи',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1950).max(new Date().getFullYear()).error('Вкажіть коректний рік'),
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
      name: 'order',
      title: 'Порядок відображення на сайті',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).error('Вкажіть порядок від 1 і вище'),
    }),
  ],

  preview: {
    select: {
      title: 'name.uk',
      subtitle: 'position.uk',
      media: 'photo',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
