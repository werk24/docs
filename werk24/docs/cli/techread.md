# Techread Subcommand

The techread subcommand allows you to submit your Technical Drawing and ask Werk24 to return certain details about it. We call these details "asks". See [API/Asks](/docs/api/asks) for a more detailed description. While the API allows you to define your asks in a more granular way, the CLI will always request each ask with its default attributes.

## Available Commands

The sniplet below gives you an overview over the available commands. You can obtain the same output by calling `w24cli techread --help`.

    usage: w24cli techread [-h] [-i] [--ask-techread-started]
                       [--ask-page-thumbnail] [--ask-sheet-thumbnail]
                       [--ask-cut-thumbnail] [--ask-part-overall-dimensions]
                       [--ask-train]
                       input_file

    positional arguments:
      input_file                path to the file that is to be analyzed

    optional arguments:
        -h, --help              show this help message and exit
        -i, --ignore-architecture-status
                                flag indicating whether the architecture status should
                                be ignored (i.e. whether the request should be sent
                                even though the architecture is unavailable)
        --ask-techread-started
                                ask for a callback when the techread process has been
                                picked up by a worker
        --ask-page-thumbnail    ask for a thumbnail for each page in the document
        --ask-sheet-thumbnail
                                ask for a thumbnail of each sheet in the document
        --ask-cut-thumbnail     ask for a thumbnail of each cut of each sheet in the
                                document
        --ask-part-overall-dimensions
                                ask for the overall dimensions of each part. The API
                                will return the x,y,z dimensions as well as an enum
                                indicating the shape
        --ask-train             ask the the API to use the document solely for
                                training. This is mainly used for internal purposes,
                                but your are invited to submit additional files if you
                                want to help us improve our system. Your will not be
                                charged for these requests (but you'll also not get a
                                response)

## Ignore Architecture Status

This flag deserves special attention. Before the CLI submits a reading request to the API, it checks whether the Architecture is available (See [Basics/Service-Times](/docs/basics/service_times/)). If the Architecture is not available, it will stop the execution and yield a warning. As we understand that software developer's working hours do not necessarily overlap with the working hours of machine builders (think 5am shift start), we allow you to set the `-i` flag. This will still send the request to the Werk24 API and start processing it. You will still be able to receive the asks that do not require the GPU infrastructure: W24AskTechreadStarted, W24AskPageThumbnail, W24SheetThumbnail.
