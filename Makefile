.PHONY: serve

serve:
	@printf '%s\n' \
		'source "https://rubygems.org"' \
		'' \
		'gem "jekyll", "~> 4.4"' \
		> Gemfile
	bundle install
	bundle exec jekyll serve
