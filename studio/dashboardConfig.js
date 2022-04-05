export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624c8026d5b16d7d95a79e9b',
                  title: 'Sanity Studio',
                  name: 'bibiane-zimba-studio',
                  apiId: '0baa5456-6f04-4877-aa89-6f893be576ee'
                },
                {
                  buildHookId: '624c8026cde4e00773680d55',
                  title: 'Blog Website',
                  name: 'bibiane-zimba',
                  apiId: 'd16c01a8-b2f7-4be3-8315-ba53963781d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nachtfunke/bibiane-zimba',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bibiane-zimba.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
