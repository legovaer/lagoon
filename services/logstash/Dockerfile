FROM docker.elastic.co/logstash/logstash:5.4.0

USER root

RUN curl -sLo /usr/local/bin/fix-permissions https://raw.githubusercontent.com/sclorg/s2i-base-container/master/bin/fix-permissions && \
    chmod +x /usr/local/bin/fix-permissions

COPY logstash.conf /usr/share/logstash/pipeline/logstash.conf
COPY logstash.yml /usr/share/logstash/config/logstash.yml

RUN fix-permissions /usr/share/logstash

ARG AMAZEEIO_GIT_BRANCH=undefined
ENV RABBITMQ_HOST "${AMAZEEIO_GIT_BRANCH}-rabbitmq"
ENV RABBITMQ_USER "amazeeio"
ENV RABBITMQ_PASSWORD "NYTVU4jdRMjRMmbRcC3JubDH8M34MrWeT3"
ENV XPACK_MONITORING_ELASTICSEARCH_URL "http://${AMAZEEIO_GIT_BRANCH}-elasticsearch:9200"
ENV ELASTICSEARCH_URL "http://${AMAZEEIO_GIT_BRANCH}-elasticsearch:9200"