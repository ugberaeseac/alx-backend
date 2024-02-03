#!/usr/bin/env python3
"""

"""


BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """
    class BasicCache inherit from class BaseCaching
    """

    def put(self, key, item):
        """
        Add an item to the cache
        """
        if key is None or item is None:
            pass
        self.cache_data[key] = item

    def get(self, key):
        """
        Gets an item by the key
        """
        if key is not None:
            return (self.cache_data.get(key))
        return None
