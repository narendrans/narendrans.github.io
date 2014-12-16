title: Installing apps easily using brew cask
date: 2014-12-15 23:27:16
tags:
---

Because of various reasons I had to reinstall osx a lot of times (>2 ;)), so I was looking at automating this tedious process of installing all the apps and softwares I needed. I found this very good brew called [cask][1]. After doing a clean install of osx I just run the below script and all is done!

<br/> <br/>
`ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`

```
brew cask install firefox-nightly
brew cask install google-chrome
brew cask install flash
brew cask install google-hangouts
brew cask install java 
brew cask install java7
brew cask install skype
brew cask install google-drive
brew cask install dropbox
brew cask install xampp
brew cask install sublime-text-dev
brew cask install github
brew cask install android-file-transfer
brew cask install boom
brew cask install utorrent
brew cask install picasa

brew cask install eclipse-jee
brew cask install vmware-fusion
```

[1]: http://caskroom.io/