from django.test import TestCase
from .algorithm import predict


class AlgoTest(TestCase):
    def setUp(self) -> None:
        self.input_str1 = 'lasagna,butter,onion,garlic,flour,salt,chicken broth,milk,mozzarella,parmesan,basil,' \
                          'oregano,black pepper,ricotta,chicken,spinach,parsley'
        self.input_str2 = 'ricotta,sugar,egg,vanilla,almond,rum,lemon,lemon juice,orange'

    def test1(self):
        self.assertEqual(
            '77.29% likely to be tasty',
            predict(self.input_str1)
        )

    def test2(self):
        self.assertEqual(
            '27.5% likely to be tasty',
            predict(self.input_str2)
        )
