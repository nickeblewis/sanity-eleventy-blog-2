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
                  buildHookId: '5fefab9611e18be5aa5aaa30',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-2-studio-udwymkox',
                  apiId: '1541ad2c-87cb-4c1b-9428-d0415ee76d56'
                },
                {
                  buildHookId: '5fefab96e8dbfb07cdca073d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-2-web-ji842v7n',
                  apiId: '73f3cb46-c646-4ff0-9c6b-b69a76874804'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-eleventy-blog-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-2-web-ji842v7n.netlify.app', category: 'apps'}
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
