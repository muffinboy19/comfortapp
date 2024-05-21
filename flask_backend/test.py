import unittest
from app import app

class TestApp(unittest.TestCase):
    def setUp(self):
        # Create a test client
        self.app = app.test_client()
        self.app.testing = True

    def test_index_route(self):
        # Test the index route returns a 200 OK status code
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)

    # Add more test cases as needed

if __name__ == '__main__':
    unittest.main()
