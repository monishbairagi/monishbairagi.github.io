[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?style=flat&logo=github)](https://github.com/monishbairagi/monishbairagi.github.io) [![Live Demo](https://img.shields.io/badge/Live_Demo-View-green?style=flat)](http://monishbairagi.github.io/)

## Description
This project is built using Angular and requires specific software versions for optimal performance. Follow the instructions below to set up the environment and run the application.

The application is live on  http://monishbairagi.github.io/

## Required Software
1. **Node.js**
   - Preferred Version: **v20.18.0**
   - Download from [Node.js Official Website](https://nodejs.org/)

2. **Angular CLI**
    Install the required version globally:
     ```bash
     npm install -g @angular/cli@14.2.8
     ```

## Setup Instructions
To set up the project, follow these steps:
1. **Install Dependencies**
    Run the following command to install the necessary dependencies:
   ```bash
   npm install --legacy-peer-deps
    ```
2. **Update Angular**
    To ensure all Angular dependencies are up to date, run:
   ```bash
   ng update
   ```
3. **Run the Application**
    Start the development server with:
   ```bash
   ng serve
   ```
   The application will be available at http://localhost:4200/

## Deployment

To deploy your Angular application to GitHub Pages, follow these steps:

1. **Install Angular CLI GitHub Pages Package**:
	```bash
   npm install -g angular-cli-ghpages
	```
2. **Configure GitHub Pages**:
	- Go to your GitHub repository.
	- Click on Settings.
	- Navigate to Pages.
	- Under Source, select the branch you want to deploy from (e.g., [`recent-release-branch`]) and set the folder to `/ (root)`.
	
3. **Remove Any Existing dist Directory**: 
	If there is a previous dist directory, remove it:
	```bash
	rmdir /s /q dist
	```
4. **Build Your Angular Application**: 
	Run the following command to build your application:
	```bash
	ng build --base-href "https://monishbairagi.github.io/"
	```
5. **Deploy to GitHub Pages**: 
	Use the command below to deploy your application to the specified branch:
	```bash
	npx angular-cli-ghpages --dir=dist/monishbairagi.github.io/ --branch=<branch-name>
	```
	Replace <branch-name> with the name of the branch you want to deploy to.

After completing these steps, your Angular app should be live on GitHub Pages!

## Contributing
If you would like to contribute to this project, please fork the repository and create a pull request. All contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
Thank you for checking out this project! If you have any questions, feel free to open an issue or reach out.