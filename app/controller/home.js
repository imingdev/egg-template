const { Controller } = require('egg');

module.exports = class HomeController extends Controller {
  async index(ctx) {
    ctx.body = await ctx.model.Article.findAll();
  }
};
