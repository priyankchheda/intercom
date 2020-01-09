""" Intercom Customer Invitation Test Case
"""


import unittest
from intercom.customer import Customer
from intercom.invite_list import get_invite_list


class TestCustomer(unittest.TestCase):
    """ Customer Test Cases """

    def setUp(self):
        raw_data = [
            {"latitude": "54.0894797", "user_id": 8,
             "name": "Eoin Ahearn", "longitude": "-6.18671"},
            {"latitude": "53.038056", "user_id": 26,
             "name": "Stephen McArdle", "longitude": "-7.653889"},
            {"latitude": "54.1225", "user_id": 27,
             "name": "Enid Gallagher", "longitude": "-8.143333"},
            {"latitude": "53.1229599", "user_id": 6,
             "name": "Theresa Enright", "longitude": "-6.2705202"},
            {"latitude": "52.2559432", "user_id": 9,
             "name": "Jack Dempsey", "longitude": "-7.1048927"}
        ]
        self.output_dict = {
            6: 24.085360019065416,
            8: 83.53253116782588,
            9: 133.26233253422674,
            26: 98.87459926457565,
            27: 151.54302371499176
        }
        self.customer_list = []
        for data in raw_data:
            self.customer_list.append(Customer(data))

    def test_get_distance_from_office(self):
        """ testing get_distance_from_office method """
        for customer in self.customer_list:
            self.assertEqual(customer.distance_from_office,
                             self.output_dict[customer.user_id])

    def test_get_invite_list(self):
        """ testing get_invite_list function """
        invite_list = get_invite_list('./tests/data/test_customers.txt')
        self.assertEqual(len(invite_list), 1)
        customer = invite_list[0]
        self.assertEqual(customer.name, "Theresa Enright")
        self.assertEqual(str(customer), "6 - Theresa Enright")


if __name__ == "__main__":
    unittest.main()
