var Blog = Blog || {};
Blog.Controllers = angular.module('blog.controllers',[]);
Blog.Services = angular.module('blog.services',['ngResource']);


Blog.Dependencies = ['ngRoute','ngResource','blog.routes','blog.controllers', 'blog.services'];

angular.module('blog',Blog.Dependencies);
