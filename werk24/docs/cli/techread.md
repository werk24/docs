# Techread Subcommand

The techread subcommand allows you to submit your Technical Drawing and ask Werk24 to return certain details about it. We call these details "asks". See [API/Asks](../api/asks) for a more detailed description. While the API allows you to define your asks in a more granular way, the CLI will always request each ask with its default attributes.

## Available Commands

The sniplet below gives you an overview over the available commands. You can obtain the same output by calling `w24cli techread --help` .

    usage: w24cli techread [-h] [--ask-techread-started] [--ask-page-thumbnail]
                       [--ask-sheet-thumbnail] [--ask-sectional-thumbnail]
                       [--ask-variant-measures]
                       input_file

    positional arguments:
      input_file            path to the file that is to be analyzed

    optional arguments:
      -h, --help            show this help message and exit
      --ask-techread-started
                            ask for a callback when the techread process has been
                            picked up by a worker
      --ask-page-thumbnail  ask for a thumbnail for each page in the document
      --ask-sheet-thumbnail
                            ask for a thumbnail of each sheet in the document
      --ask-sectional-thumbnail
                            ask for a thumbnail of each sectional of each sheet in
                            the document
      --ask-variant-measures
                            ask for the measures of each variant
