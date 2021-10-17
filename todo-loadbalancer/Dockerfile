FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf ./etc/nginx/conf.d/default.conf

COPY ./stub_status.conf ./etc/nginx/conf.d/stub_status.conf