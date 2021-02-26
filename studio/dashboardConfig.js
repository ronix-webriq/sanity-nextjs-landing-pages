export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6038699907c86b3320a345fa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vj1c7hfe',
                  apiId: 'df9bcd16-cb7c-4bf5-89c0-d8f24df3191b'
                },
                {
                  buildHookId: '6038699959ee4e2da4e73a9c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3cyqahnr',
                  apiId: 'cfd0169c-02ca-48ed-9894-f5145aa76fc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ronix-webriq/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3cyqahnr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
