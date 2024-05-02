#!/bin/ash
echo "alias ll='ls -l'" > /etc/profile.d/custom_aliases.sh
echo "source /etc/profile.d/custom_aliases.sh" >> /etc/profile
exec "$@"