# intersys-py-lib
A library application that connects to an Inter Systems IRIS database. This project uses [InterSystems IRIS](http://intersystems.com/iris) to store library book data, and data is retrieved and served using Python's [flask](https://flask.palletsprojects.com/en/1.1.x/) framework. The frontend is built using [nextjs](https://nextjs.org).

## Preview

Initial Page:

[![initial page](https://i.postimg.cc/1tP9JrCf/Screen-Shot-2021-02-20-at-2-53-33-PM.png)](https://postimg.cc/9485fZjh)

Results Page:

[![results page](https://i.postimg.cc/qRNYB9n5/Screen-Shot-2021-02-25-at-1-20-30-PM.png)](https://postimg.cc/YGw8bDd6)

Check-in/Check-out books:

[![check-out-book](https://i.postimg.cc/tC3cgdZp/Screen-Shot-2021-02-25-at-1-23-04-PM.png)](https://postimg.cc/rKpjnrNP)

## Installation

This project requires an instance of InterSystems IRIS running on your machine. Go to [InterSystems IRIS data platform](https://hub.docker.com/_/intersystems-iris-data-platform) on docker and follow the set up instructions. Once that is set up, enter your information in the `/library_api/connection.cfg` file. This project requires the `irisnative` library to connect to the database. To install this package, open a terminal and navigate to the `library_api` folder. Type the following on the command line according to your operating system:
  - Windows: `pip install _install\irisnative-1.0.0-cp34.cp35.cp36.cp37-none-win_amd64.whl`
  - Mac: `pip install _install/irisnative-1.0.0-cp34-abi3-macosx_10_13_x86_64.macosx_10_14_x86_64.whl`
  - Linux `pip install _install/irisnative-1.0.0-cp34-abi3-linux_x86_64.whl`

This project uses `pipenv` to run the program. Pipenv is a python packaging manager that will automatically download and install the packages needed to run the program. Install `pipenv` by typing `python[3] -m pip install pipenv`. To run the program, navigate to the `library_api` folder and type `pipenv run python[3] server.py` in a terminal. This should download the required modules and start a server.

To run the frontend, navigate to `libary_spa` folder and type `npm run start` in a terminal. Go to `http://localhost:3000/` to interact with the client locally.

