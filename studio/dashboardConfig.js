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
                  buildHookId: '618a663c94a32e3051f8e7bd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qub19qt5',
                  apiId: '2fe44966-c00f-4161-85bc-001e31d72608'
                },
                {
                  buildHookId: '618a663da1540e3c4af9044b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pmvmibh9',
                  apiId: '78b75fdd-1be4-485b-9687-eef8a6c5c52e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fikalefaza/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pmvmibh9.netlify.app', category: 'apps'}
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
