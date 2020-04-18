# -*- coding: utf-8 -*-
"""
Created on Fri Apr  3 13:44:22 2020

@author: Richard
"""

import json
import facebook


def main():
    token = "EAAH6VpZAy318BAO13P9dbvxsZBDcugYNAPe82qHwUHeC5qVXW3tzdRgYZAhdOWDKk9t4C33fCZCHk7im5owqgmpwhZBVpJZBXcz0Xh2g1ef2CRYE70wkNGTsitljYbr9WcLQSm3ItH3nZCj1eR5PV8mzvZCLUMIbqngOuDcl6NOkTIx2Kxp8tmSZCEeFHhFAFARdkNh6Bljh3V5tZCJZBAcxZCQbAZBbtHRjfYbIdEzA7DhDb2gZDZD"
    graph = facebook.Graph(token)
    fields = ['email, gender']
    profile = graph.get_object("me", fields=fields)
    print(json.dumps(profile, indent=4))
