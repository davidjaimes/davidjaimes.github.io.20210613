#!/bin/bash

number=$(< .git/logs/HEAD wc -l)
echo var commits =$number