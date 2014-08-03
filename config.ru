Sinatra::Application.default_options.merge!(
  :run => false,
  :env => :production
)

require './index.rb'
run Sinatra::Application