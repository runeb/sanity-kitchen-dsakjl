export default {
  widgets: [
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
                  buildHookId: '5eac4bd81086078126362746',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-dsakjl-studio',
                  apiId: 'b93c1e18-b707-4d8b-882e-a35daccfdc8f'
                },
                {
                  buildHookId: '5eac4bd88ac1b0894b053af9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-dsakjl',
                  apiId: '697d8e85-e841-461c-8a2c-7c20c8b109ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-kitchen-dsakjl',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-dsakjl.netlify.app', category: 'apps'}
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
