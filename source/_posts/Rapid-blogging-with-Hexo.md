title: Rapid blogging with Hexo
date: 2014-11-26 18:27:15
tags: hexo
comments: true
---

After running into some problems with jekyll I decided to give [Hexo][1] a try. I used a dev branch to keep the hexo files and 
the master branch where the blog will be listed. Setting up hexo is quick and easy. The reason of having two separate branches is that GitHub automatically builds everytime you push files. I tried adding .nojekyll but I couldn't get it to work. This may not be an elegant approach but it works well for me!

First I created another dev branch in github. And then cloned both the dev and master branch. (Use application key so that git doesn't ask for username and password everytime)

```
git clone https://<app key>@github.com/narendrans/narendrans.github.io.git prod
git clone https://<app key>@github.com/narendrans/narendrans.github.io.git --branch dev dev
```

Configure username and email

```
git config --global user.name "Naren"
git config --global user.email blog@narendran.info```

Install hexo

```
sudo npm install hexo
cd dev && hexo init
npm install && cd ..```

Install a theme

`git clone https://github.com/hexojs/hexo-theme-light.git dev/themes/light`

Create a blog post

```
cd dev
hexo new "Rapid blogging with Hexo"```

Generate the blog to prod/blog and push dev and prod branches

```
rm -rf prod/blog && cd dev && hexo generate
git add --all && git commit -a -m "commit" && git push
cd ../prod/
git add --all && git commit -a -m "commit" && git push && cd ..
```

Everytime I update/add a new blog I would just use the above chain of commands (Just copy paste). Using a static blogger like [Hexo][1] along with GitHub is just easy and interesting!

You can use chrome to do all this. Just install [Chrome Secure Shell][2]

[1]: http://hexo.io/
[2]: https://chrome.google.com/webstore/detail/secure-shell/pnhechapfaindjhompbnflcldabbghjo?hl=en
