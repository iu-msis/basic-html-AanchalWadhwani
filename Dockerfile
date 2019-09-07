FROM php:7.3.8-apache

LABEL maintainer="Aanchal Wadhwani"

COPY ./app /srv/app

# The destination directory will need to change, based on the image,
# because the config files are put in different places in different images
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
