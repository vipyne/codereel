require 'sinatra'

get '/' do
  erb :index
end

get '/code.html' do
  erb :code
end

get '/reel.html' do
  erb :reel
end