#!/bin/env bash

yarn doc
git chechout gh-pages
rm -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -