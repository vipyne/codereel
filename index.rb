require 'sinatra'
require 'github_api'

get '/' do
  erb :index
end

get '/code.html' do
  @streak = "vipyne"
  p @streak
  p "*"*50
  p params
  @streak2 = Github.repos.list user: 'vipyne'
  erb :code
end

get '/reel.html' do
  erb :reel
end