/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neutro = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_Neutro');

if (Config.WORKTYPE == 'private') {

Neutro.tenu({pattern: 'neotro ?(.*)', fromMe: true, donttenuList: true}, (async (message, match) => {

var CMD_HELP = '';
if (match[1] === '') {
Neutro.commands.map(
async (command) =>  {
if (command.donttenuList || command.pattern === undefined) return;
try {
var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
} catch {
var match = [command.pattern];
}

var HANDLER = '';

if (/\[(\W*)\]/.test(Config.HANDLERS)) {
HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
HANDLER = '.';
}
if (command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
}
if (command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (!command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if  (command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n\n'
}
if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
}
);
await message.client.sendMessage(
message.jid,'⚜▬▬▬ *🎭Neotro-X VIP Private* ▬▬▬⚜\n\n' + CMD_HELP, MessageType.text
);
} else {
var CMD_HELP = '';
Neutro.commands.map(
async (command) =>  {
if (command.donttenuList || command.pattern === undefined) return;
try {
var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
} catch {
var cmatch = [command.pattern];
}
if (cmmatch.endsWith(' ')) {
var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
}
if (cmmatch == match[1]) {
var HANDLER = '';

if (/\[(\W*)\]/.test(Config.HANDLERS)) {
HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
HANDLER = '.';
}
if (command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
}
if (command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (!command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if  (command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n\n'
}
if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
}
}
);
if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
await message.client.sendMessage(
message.jid,'⚜▬▬▬ *🎭Neotro-X VIP Private* ▬▬▬⚜\n\n' + CMD_HELP, MessageType.text
);
}
}));
}
else if (Config.WORKTYPE == 'public') {

Neutro.tenu({pattern: 'nv ?(.*)', fromMe: false, donttenuList: true}, (async (message, match) => {

var CMD_HELP = '';
if (match[1] === '') {
Neutro.commands.map(
async (command) =>  {
if (command.donttenuList || command.pattern === undefined) return;
try {
var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
} catch {
var match = [command.pattern];
}

var HANDLER = '';

if (/\[(\W*)\]/.test(Config.HANDLERS)) {
HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
HANDLER = '.';
}
if (command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
}
if (command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*🎭 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (!command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if  (command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n\n'
}
if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
}
);
await message.client.sendMessage(
message.jid,'⚜▬▬▬ *🎭Neotro-X VIP Public* ▬▬▬⚜\n\n' + CMD_HELP, MessageType.text
);
} else {
var CMD_HELP = '';
Neutro.commands.map(
async (command) =>  {
if (command.donttenuList || command.pattern === undefined) return;
try {
var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
} catch {
var cmatch = [command.pattern];
}
if (cmmatch.endsWith(' ')) {
var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
}
if (cmmatch == match[1]) {
var HANDLER = '';

if (/\[(\W*)\]/.test(Config.HANDLERS)) {
HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
HANDLER = '.';
}
if (command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
}
if (command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (!command.desc == '' && !command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
}
if (!command.desc == '' && command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if (command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
if  (command.desc == '' && command.usage == '' && command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n\n'
}
if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
CMD_HELP += '*💠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*⚜ ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
}
}
}
);
if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
await message.client.sendMessage(
message.jid,'⚜▬▬▬ *🎭Neotro-X VIP Public* ▬▬▬⚜\n\n' + CMD_HELP, MessageType.text
);
}
}));
}
