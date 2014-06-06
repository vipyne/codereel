require 'sinatra'

get '/' do
  erb :index
end

get '/code.html' do
  redirect "http://vanessa.rhymeswithart.com/code.html"
  # erb :code
end

get '/reel/index.html' do
  redirect "http://vanessa.rhymeswithart.com/reel/index.html"
end