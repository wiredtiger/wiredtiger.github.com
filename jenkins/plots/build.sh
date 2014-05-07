#!/bin/sh

pandoc -f markdown -t html -s < index.md > index.html
