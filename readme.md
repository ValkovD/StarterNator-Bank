## Full-Stack Application & VPS Infrastructure

Modern full-stack web application built and deployed entirely by myself using the MERN stack and self-managed VPS infrastructure.

Main goal of this app is data collection by breakdown patrols attending live jobs on the roadside. The initial version of the app includes options for two fault types: starter motor and alternator. The original idea was for this data to be used to assist a business that deals with repairing and reconditioning starters and alternators. More fault types can be added in the future.

The project was developed with a complete separation between frontend and backend architecture. The frontend was created using React with Bootstrap for a responsive and clean user interface, while the backend was built with Node.js and Express.js to provide REST API functionality, application logic, authentication handling, and database communication. MongoDB is used as the primary database solution, running inside its own Docker container for better isolation and management.

Beyond the application development itself, the project demonstrates strong understanding of production deployment, containerization, and server administration. Both the frontend and backend applications are fully containerized using Docker and deployed through Portainer on a self-managed VPS environment. Custom subdomains were configured for the services, while Nginx Proxy Manager was used to handle reverse proxy routing, HTTPS configuration, and secure external access to the hosted applications.

The entire infrastructure, deployment pipeline, networking configuration, and server management were independently configured and maintained solely by myself.

## Technical Skills Demonstrated

- Full-stack MERN development
- React frontend architecture
- Bootstrap responsive UI development
- Node.js and Express.js backend development
- REST API architecture
- MongoDB database integration
- Docker containerization
- Portainer container management
- VPS server administration
- Linux command line operations
- Reverse proxy and domain configuration
- Nginx Proxy Manager setup
- Production deployment workflows
- Environment variable management
- Git and version control workflows

## Project Outcome

This project demonstrates the ability to independently design, develop, deploy, and maintain a complete production-ready web application and server infrastructure. It highlights both software engineering and DevOps skills, including backend architecture, frontend development, container orchestration, networking, reverse proxy management, and VPS administration.

## Visit the App at: https://starternator.pdeit.com/