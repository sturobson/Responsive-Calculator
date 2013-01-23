# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "rwdcalc"
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.5")
  s.authors = ["Stuart Robson", "Scott Kellum"]
  s.email = ["stu@alwaystwisted.com", "scott@scottkellum.com"]
  s.homepage = "http://rwdcalc.com"

  s.description = ["Create color schemes with ease."]
  s.summary = ["Create color schemes with ease."]

  s.has_rdoc = false
  s.files = [
    "rwdcalc.gemspec",
    "lib/rwdcalc.rb",
    "stylesheets/_rwdcalc.scss"
  ]

  s.require_paths = ["lib"]
  s.rubygems_version = ["1.7.2"]

  # Dependent Gems
  s.add_dependency 'sass',                ">= 3.2.1" 
  s.add_dependency 'compass',             ">= 0.12.2" 
end