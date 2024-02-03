#!/usr/bin/env python3
"""
class BasicCache that inherits from BaseCaching and is a caching system
You must use self.cache_data - dictionary from the parent class BaseCaching
This caching system doesn’t have limit
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
        if key and key in self.cache_data:
            return (self.cache_data.get(key))
        return None
