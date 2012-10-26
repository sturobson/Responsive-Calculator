# -*- encoding: utf-8 -*-
require './lib/rwdcalc'

Gem::Specification.new do |s|
  # General Project Information
  s.name = "rwdcalc"
  s.version = rwdcalc::VERSION
  s.date = rwdcalc::DATE
  s.rubyforge_project = "rwdcalc"
  s.rubygems_version = "1.7.2"
  s.required_rubygems_version = Gem::Requirement.new(">= 1.2")
  
  # Author Information
  s.authors = ["Stuart Robson", "Scott Kellum"]
  s.email = ["stu@alwaystwisted.com", "snugug@gmail.com"]
  s.homepage = ["http://rwdcalc.com"]
  
  # Project Description
  s.description = "Make pixel to percent conversions easy."
  s.summary = "Make pixel to percent conversions easy."
  
  # Files to Include
  s.files = Dir.glob("lib/*.*")
  s.files += Dir.glob("stylesheets/*.*")
  # s.files += Dir.glob("templates/**/*.*")
  
  # Dependent Gems
  s.add_dependency 'sass',                ">= 3.2.1" 
  s.add_dependency 'compass',             ">= 0.12.2" 
end