""" Intercom Home Test Assessment
"""


from intercom.invite_list import get_invite_list


def main():
    """ operational function """
    print("\nInvitation List:")
    invite_list = get_invite_list('./customers.txt')
    for customer in invite_list:
        print(customer)


if __name__ == "__main__":
    main()
