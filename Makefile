.PHONY: serve

serve:
	@printf '%s\n' \
		'source "https://rubygems.org"' \
		'' \
		'gem "jekyll", "~> 4.4"' \
		'gem "jekyll-remote-theme"' \
		'gem "just-the-docs"' \
		> Gemfile
	bundle install
	bundle exec jekyll serve
