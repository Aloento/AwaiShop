#!/bin/sh
curl  https://get.acme.sh | sh -s email=Me@Aloen.to
alias acme.sh=~/.acme.sh/acme.sh
acme.sh --issue -d awai.aloen.to --standalone

mkdir ./ASSL

acme.sh --install-cert -d awai.aloen.to \
--cert-file      ./ASSL/chain.pem \
--key-file       ./ASSL/privkey.pem \
--fullchain-file ./ASSL/fullchain.pem
