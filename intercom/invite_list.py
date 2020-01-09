""" Generate Invitation List
"""


import json
from intercom.customer import Customer


def get_invite_list(filename):
    """ read customer records from text file and send invite to any customer
    within 100 km of Dublin office for food and drinks.
    :returns: list of customer who is eligible for invitation
    """
    customer_list = []
    with open(filename, 'r') as file_input:
        for line in file_input.readlines():
            customer_dict = json.loads(line.strip())
            customer_list.append(Customer(customer_dict))

    invite_list = []
    for customer in customer_list:
        if customer.distance_from_office <= 100.00:
            invite_list.append(customer)

    # sorting invite list according to used ID
    invite_list.sort(key=lambda x: x.user_id)
    return invite_list
