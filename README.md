# intersys-py-lib
A library application that connects to an Inter Systems IRIS database. This project uses [InterSystems IRIS](http://intersystems.com/iris) to store library book data, and data is retrieved and served using Python's [flask](https://flask.palletsprojects.com/en/1.1.x/) framework. The frontend is built using [nextjs](https://nextjs.org).

## Preview

Initial Page
[![initial page](https://i.postimg.cc/1tP9JrCf/Screen-Shot-2021-02-20-at-2-53-33-PM.png)](https://postimg.cc/9485fZjh)

Results Page
[![results page](https://i.postimg.cc/x88V4xKT/Screen-Shot-2021-02-20-at-2-55-50-PM.png)](https://postimg.cc/Q92zBq4R)

## Installation

This project requires an instance of InterSystems IRIS running on your machine. Go to [InterSystems IRIS data platform](https://hub.docker.com/_/intersystems-iris-data-platform) on docker and follow the set up instructions. Once that is set up, enter your information in the `/library_api/connection.cfg` file. This project requires the `irisnative` library to connect to the database. To install this package, open a terminal and navigate to the `library_api` folder. Type the following on the command line according to your operating system:
  - Windows: `pip install _install\irisnative-1.0.0-cp34.cp35.cp36.cp37-none-win_amd64.whl`
  - Mac: `pip install _install/irisnative-1.0.0-cp34-abi3-macosx_10_13_x86_64.macosx_10_14_x86_64.whl`
  - Linux `pip install _install/irisnative-1.0.0-cp34-abi3-linux_x86_64.whl`

Additionally install flask by `pip install flask`.

To run the server, navigate to the `library_api` folder and type `python server.py` in a terminal.

To run the frontend, navigate to `libary_spa` folder and type `npm run start` in a terminal. Go to `http://localhost:3000/` to interact with the client locally.

## Todo

- make a python build file
