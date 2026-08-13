# RainIntel

## Project Overview
RainIntel is a comprehensive field assessment and analytics platform designed to evaluate and predict rainwater harvesting (RWH) potential across various regions. 

## Problem Statement
Water scarcity requires accurate on-ground assessment of building structures, catchment properties, and historical rainfall patterns. RainIntel provides an integrated system for Field Engineers and Administrators to manage and visualize these assessments effectively.

## Features
- Complete Field Assessments with GIS integration
- Advanced analytics for Rainwater Harvesting optimization
- Real-time soil and rainfall geographic visualisations
- Automated assessment reporting and PDF generation

## User Roles

### Super Admin
System administrator with complete system access, user management, and global oversight.

### District Admin
Administrator responsible for operations and assessments within a specific geographic district.

### Field Engineer
Field engineer who performs on-site building assessments and logs structural and catchment data.

## System Architecture
The application runs on a dedicated microservice architecture on the backend, paired with a React single-page application.

## Technology Stack

Frontend:
- React
- Vite

Backend:
- Spring Boot (Java)
- Spring Cloud (Microservices)

Database:
- Oracle Database (21c XE)

GIS:
- Leaflet / React Leaflet

## Project Structure
- `/src` - React frontend source code
- `/backend` - Java microservices (Business, Auth, API Gateway, Service Registry, Config)
- `/database` - Database scripts and Python importers
- `/gis` - GIS and spatial analysis utilities

## Installation
Ensure you have Node.js 20+, Java 17+, Maven, and Python installed. An instance of Oracle Database 21c XE must be accessible locally.

## Environment Configuration
Set the following environment variables. **Do not embed actual credentials in source code.**
```
ORACLE_USERNAME=<your-username>
ORACLE_PASSWORD=<your-password>
ORACLE_SERVICE=<your-oracle-service-name>
JWT_SECRET=<your-secret>
```

## Running the Application
A convenience root script is provided:
```powershell
.\run_rainintel.ps1
```
This handles starting all microservices on ports 8761, 8888, 8080, 8081, 8082, and the frontend on port 5173.

## Database Setup
Run the provided python scripts using the local Python environment (setting the `ORACLE_PASSWORD` environment variable) to hydrate schemas and seed users. Execute `create_app_tables.py` in `/database`.

## Future Enhancements
- Expanded 3D modelling and automated pipe planning
- Machine learning based predictive analytics for rainfall departure