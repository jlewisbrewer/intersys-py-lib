import irisnative

CONFIG_FILE = 'library_api/dev.cfg'

def get_connnection_info(file_name):
    connection_info = {}
    with open(file_name) as f:
        for line in f:
            line = ''.join(line.split())
            line = line.split(':')
            connection_info[line[0]] = str(line[1])

    return connection_info

def connect_database():
    connection_info = get_connnection_info(CONFIG_FILE)
    ip = connection_info['ip']
    port = int(connection_info['port'])
    namespace = connection_info['namespace']
    username = connection_info['username']
    password = connection_info['password']

    connection = irisnative.createConnection(ip, port, namespace, username, password)

    print("Connected to server")
    return irisnative.createIris(connection)