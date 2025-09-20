# Simple nginx-based image for now
FROM nginx:alpine

# Copy a simple index.html for testing
RUN echo '<!DOCTYPE html><html><head><title>Always-Open Website</title></head><body><h1>Always-Open Website</h1><p>Coming soon...</p></body></html>' > /usr/share/nginx/html/index.html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
