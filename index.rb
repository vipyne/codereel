require 'sinatra'
require 'github_api'
require 'nokogiri'
require 'open-uri'
require 'json'

get '/' do
  erb :index
end

get '/code.html' do
  get_github_cal
  erb :code
end

get '/reel.html' do
  erb :reel
end


def get_github_cal
  calendar = Nokogiri::HTML(open('https://github.com/users/vipyne/contributions_calendar_data'))
  str = calendar.xpath('//p')
  arr = str.children.text
  d2 = JSON.parse(arr).reverse!
  d2.shift if d2[0][1] == 0
  streak = d2.take_while { |day| day[1] != 0 }
  @streak = streak.length
end
