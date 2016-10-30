#!/bin/bash

sleep 5
mysql -h mysql -u root -ppassword mydb < /migrations/migrations.sql
