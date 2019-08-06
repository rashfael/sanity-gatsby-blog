export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d49ea8a570e09cc81aca6c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yiza86tc',
                  apiId: '277e5efe-5bf3-4885-9e40-d48800dedc1b'
                },
                {
                  buildHookId: '5d49ea8a74a335e8bcc4036b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5ighw3m3',
                  apiId: '68cae346-14f7-41e2-8409-60c04421b621'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rashfael/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5ighw3m3.netlify.com', category: 'apps'}
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
