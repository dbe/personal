require File.expand_path('../boot', __FILE__)

# require 'rails/all'
# I commented this out to get rid of active record: https://stackoverflow.com/questions/19078044/disable-activerecord-for-rails-4
# https://github.com/dbe/personal/commit/3cd4d6d5d352094961512583c065fe0091430955
# I also had to remove other references to active_record in the enviroments files.
require 'action_controller/railtie'
require 'action_view/railtie'
require 'action_mailer/railtie'
require 'active_job/railtie'
require 'rails/test_unit/railtie'
require 'sprockets/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Personal
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    # config.active_record.raise_in_transactional_callbacks = true

    #Added due to heroku post: 
    #https://devcenter.heroku.com/articles/rails-4-asset-pipeline
    config.serve_static_assets = true
  end
end
