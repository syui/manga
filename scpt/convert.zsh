#!/bin/zsh
d=${0:a:h}
dd=${0:a:h:h}

url=manga.syui.ai

case $OSTYPE in
	darwin*)
		path_nvm_sh="/opt/homebrew/opt/nvm/nvm.sh";;
	linux*)
		path_nvm_sh="";;
esac

dir=$dd/public/manga
cd $dir
export NVM_DIR="$HOME/.nvm"
[ -s "$path_nvm_sh" ] && \. "$path_nvm_sh"
nvm use 17
nvm i squoosh-cli
squoosh-cli --webp '{"quality":100}' -d ./ --resize '{width:825,height:1080}' *.png
#1620 × 2160
