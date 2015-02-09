var Blog = Blog || {};
Blog.Controllers = angular.module('blog.controllers',[]);
Blog.Services = angular.module('blog.services',['ngResource']);
Blog.Routes = angular.module('blog.routes',['ngRoute']);


Blog.Dependencies = ['openlayers-directive','blog.routes','blog.controllers', 'blog.services'];

angular.module('blog',Blog.Dependencies);
