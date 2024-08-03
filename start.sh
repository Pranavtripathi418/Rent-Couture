
#!/bin/bash

# Start the server
echo "Starting server..."
node server.js &

# Navigate to the client directory and start the client
echo "Starting client..."
cd client
npm start

# Keep the script running to allow the server to keep running
wait