class Poll:
    """Class to represent a poll with question, options, and votes."""

    def __init__(self, question, options):
        """
        Initialize a Poll instance.

        Args:
            question (str): The question of the poll.
            options (list): List of poll options.
        """
        self.question = question
        self.options = options
        self.votes = [0] * len(options)

    def vote(self, option):
        """
        Record a vote for a given option.

        Args:
            option (int): Index of the option to vote for.
        """
        self.votes[option] += 1

    def get_results(self):
        """
        Get the poll results.

        Returns:
            dict: Dictionary containing option and corresponding votes.
        """
        return {option: vote for option, vote in zip(self.options, self.votes)}
class Poll:
    """Class to represent a poll with question, options, and votes."""

    def __init__(self, question, options):
        """
        Initialize a Poll instance.

        Args:
            question (str): The question of the poll.
            options (list): List of poll options.
        """
        self.question = question
        self.options = options
        self.votes = [0] * len(options)

    def vote(self, option):
        """
        Record a vote for a given option.

        Args:
            option (int): Index of the option to vote for.
        """
        self.votes[option] += 1

    def get_results(self):
        """
        Get the poll results.

        Returns:
            dict: Dictionary containing option and corresponding votes.
        """
        return {option: vote for option, vote in zip(self.options, self.votes)}
