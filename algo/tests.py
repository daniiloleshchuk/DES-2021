from django.test import TestCase
from .algorithm import predict


class AlgoTest(TestCase):
    def setUp(self) -> None:
        self.input_str1 = 'lasagna,butter,onion,garlic,flour,salt,chicken broth,milk,mozzarella,parmesan,basil,' \
                          'oregano,black pepper,ricotta,chicken,spinach,parsley'
        self.input_str2 = 'ricotta,sugar,egg,vanilla,almond,rum,lemon,lemon juice,orange'

    def test1(self):
        self.assertEqual(
            '71.08% likely to be tasty',
            predict(self.input_str1)
        )

    def test2(self):
        self.assertEqual(
            '36.68% likely to be tasty',
            predict(self.input_str2)
        )

    def test3(self):
        self.assertEqual(
            'Insert more ingredients',
            predict('')
        )

    def test4(self):
        self.assertEqual(
            'Insert more ingredients',
            predict('qefwgre,fewgr')
        )

    def test5(self):
        self.assertEqual(
            'Insert more ingredients',
            predict('fwerbwrv')
        )
