""" Intercom Customer Invitation
"""

from math import acos, cos, radians, sin


class Customer:
    """ Customer Class stores relevant information of customers """
    office_latitude = radians(53.339428)
    office_longitude = radians(-6.257664)
    earth_radius = 6371

    def __init__(self, customer_dict):
        """ initializing object from dictionary """
        self.user_id = customer_dict['user_id']
        self.name = customer_dict['name']
        self.latitude = float(customer_dict['latitude'])
        self.longitude = float(customer_dict['longitude'])
        self.distance_from_office = self.get_distance_from_office()

    def __str__(self):
        return f"{self.user_id} - {self.name}"

    def get_distance_from_office(self):
        """ gets distance of customer from Dublin office.
        Uses great circle distance formula to find the distance between
        two GPS coordinates.
        :returns: distance of customer from Dublin office in KM
        """
        lat_radians = radians(self.latitude)
        long_radians = radians(self.longitude)
        return self.earth_radius * acos(
            sin(self.office_latitude) * sin(lat_radians) +
            (cos(self.office_latitude) * cos(lat_radians) *
             cos(self.office_longitude - long_radians)))
