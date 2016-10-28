import GitUser from '../models/gitUser';
import sanitizeHtml from 'sanitize-html';
import * as querystring from 'nodemon/lib/utils/index';
// var querystring = require('querystring');
var http = require('http');

/**
 * Save a GitUser
 * @param req
 * @param res
 * @returns void
 */
export function addGitUser(req, res) {
  // if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
  //   res.status(403).end();
  // }

  const newGitUser = new GitUser(req.body.post);

  // Let's sanitize inputs
  newGitUser.name = sanitizeHtml(newGitUser.name);
  newGitUser.followers = sanitizeHtml(newGitUser.followers);
  newGitUser.site = sanitizeHtml(newGitUser.site);
  newGitUser.email = sanitizeHtml(newGitUser.email);

  newGitUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

export function searchUsersRepoGit(req, res) {
  if (!req.body.gitData.owner || !req.body.gitData.repo) {
    res.status(403).end();
  }
  qqq();
  // var data = querystring.stringify({
  //   username: "myname",
  //   password: " pass"
  // });

  // var options = {
  //   host: 'api.github.com',
  //   port: 80,
  //   path: '/repos/Gbuomprisco/ng2-tag-input/stargazers',
  //   method: 'GET',
  // };
  //
  // var httpreq = http.request(options, res => {
  //
  //   // console.log(response, "asda");
  //
  //   let body = '';
  //
  //   res.setEncoding('utf8');
  //   res.on("data", function (chunk) {
  //     console.log(chunk, "sd");
  //     body += chunk;
  //   });
  //   res.on('end', function() {
  //     console.log(body);
  //     // var users = JSON.parse(body).response;
  //
  //     // res.send(body);
  //   })
  // });
  // // httpreq.write(data);
  // httpreq.end();

  // res.json(req.body.gitData);
}

function qqq() {
  // var options = {
  //   host: "api.vk.com",
  //   port: 80,
  //   path: `/method/wall.get?domain=icecreamvan&count=5&filter=owner`
  // };

  var options = {
    host: "https://api.github.com",
    port: 80,
    path: `/repos/Gbuomprisco/ng2-tag-input/stargazers`
  };

  var body = '';

  var req = http.request(options, function (res) {
    // res.setEncoding("utf8");

    res.on("data", function (chunk) {
      body += chunk;
    });

    res.on("end", function () {
      // var posts = JSON.parse(body);
      console.log(body);
      // for (var i = 2; i < posts.length; i++) {
      //   if (posts[i].attachment.type == 'photo' && posts[i].attachment.photo.src_big) {
      //     var url = posts[i].attachment.photo.src_big;
      //     var path = filename + getRandomNumber() + '.jpg';
      //     let text = posts[i].text.replace(/^(.{100}[^\s]*).*/, "$1");
      //     console.log(text);
      //
      //     download(url, path).then(function (filepath) {
      //       bot.sendPhoto(chatId, filepath, {caption: text}).then(function () {
      //         fs.unlink(filepath);
      //       });
      //     });
      //   } else {
      //     bot.sendMessage(chatId, posts[i].text);
      //   }
      // }
    });
  });
  req.end();
}
