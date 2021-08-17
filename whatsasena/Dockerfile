FROM fusuf/whatsasena:latest

RUN git clone https://github.com/jesonpro/abc /root/abc
WORKDIR /root/abc/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
