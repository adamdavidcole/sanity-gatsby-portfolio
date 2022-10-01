export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6338ab6f02287f48775340cd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-54nft93f',
                  apiId: 'c4faedd5-8d5e-4843-ae80-eace3de1f9a9'
                },
                {
                  buildHookId: '6338ab70ab76de43d76476ad',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3kc8pc1o',
                  apiId: '65311453-4006-4af7-98c1-83c47a6a01e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamdavidcole/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3kc8pc1o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
