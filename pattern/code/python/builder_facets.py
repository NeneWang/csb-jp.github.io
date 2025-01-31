class Person:
    def __init__(self):
        print('Creating an instance of Person')
        # address
        self.street_address = None
        self.postcode = None
        self.city = None
        # employment info
        self.company_name = None
        self.position = None
        self.annual_income = None

    def __str__(self) -> str:
        return f'Address: {self.street_address}, {self.postcode}, {self.city}\n' +\
            f'Employed at {self.company_name} as a {self.postcode} earning {self.annual_income}'


class PersonBuilder:  # facade
    # This both implements Person
    def __init__(self, person=None):
        # If is not started, then we can create a new person
        if person is None:
            self.person = Person()
        else:
            # Or we can allow the edition of a builder.
            self.person = person

    # And now considers as property the Person BAddress Builder when being used for living
    @property
    def lives(self):
        return PersonAddressBuilder(self.person)

    # Also implements personJobBuilder when considering work.
    @property
    def works(self):
        return PersonJobBuilder(self.person)

    # Then finally when we call build, it would be returning the person.
    def build(self):
        return self.person


class PersonJobBuilder(PersonBuilder):
    def __init__(self, person):
        super().__init__(person)

    def at(self, company_name):
        # The buildings of company_name
        self.person.company_name = company_name
        return self

    def as_a(self, position):
        # The biuld settings of the position.
        self.person.position = position
        return self

    def earning(self, annual_income):
        # The eearnings settings of the Person builder.
        self.person.annual_income = annual_income
        return self


class PersonAddressBuilder(PersonBuilder):
    def __init__(self, person):
        super().__init__(person)

    def at(self, street_address):
        self.person.street_address = street_address
        # Because they return themselves they are able to continue editing themselves.
        return self

    def with_postcode(self, postcode):
        self.person.postcode = postcode
        return self

    def in_city(self, city):
        self.person.city = city
        return self


if __name__ == '__main__':
    pb = PersonBuilder()
    p = pb\
        .lives\
            .at('123 London Road').in_city('London').with_postcode('SW12BC').in_city('Peru')\
        .works\
            .at('Fabrikam')\
            .at('asd')\
            .as_a('Engineer')\
            .earning(123000)\
        .build()
    print(p)
    person2 = PersonBuilder().build()
    print(person2)
