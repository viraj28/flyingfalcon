#!/bin/bash
num=1
for file in *.jpg; do
       mv "$file" "$(printf "%u" $num).jpg"
       let num=$num+1
done
