#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/<myfirst>/")
sys.path.insert(0,"/var/www/<myfirst>/<myfirst>/")

import logging
logging.basicConfig(stream=sys.stderr)

from <myfirst> import app as application
