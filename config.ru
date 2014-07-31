require './index.rb'
require 'rubygems'

Sinatra::Application.default_options.merge!(
  :run => false,
  :env => :production
)

run Sinatra.application