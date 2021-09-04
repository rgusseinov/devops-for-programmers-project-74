// @ts-check

export default async (fastify) => {
  fastify.get('/articles', { name: 'articles' }, async (req, reply) => {
    const articles = await fastify.db.models.Article.findAll();
    reply.render('articles/index', { articles });
    return reply;
  });

  fastify.get('/articles/new', { name: 'newArticle' }, async (req, reply) => {
    const article = fastify.db.models.Article.build();
    reply.render('articles/new', { article });
    return reply;
  });

  fastify.post('/articles', async (req, reply) => {
    const article = fastify.db.models.Article.build(req.body.data);

    try {
      await article.save();
      req.flash('info', fastify.t('views.article.create.success'));
      reply.redirect(fastify.reverse('articles'));
    } catch ({ errors }) {
      req.flash('error', fastify.t('views.article.create.error'));
      reply.code(422);
      reply.render('articles/new', { article, errors });
    }

    return reply;
  });

  fastify.get('/articles/:id/edit', { name: 'editArticle' }, async (req, reply) => {
    reply.render('index');
    return reply;
  });

  fastify.get('/articles/:id', { name: 'article' }, async (req, reply) => {
    reply.render('index');
    return reply;
  });
};
