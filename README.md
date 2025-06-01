# Portfolio Project

This is a modern web application built with Angular 20, designed to showcase professional portfolios and personal information.

## 🚀 Features

- Modern and responsive design
- Built with Angular 20
- TypeScript support
- Component-based architecture
- Routing capabilities

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone git@github.com:KareemA-Saad/Angular-Portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

To start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## 🏗️ Building the Project

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

To execute the unit tests:

```bash
ng test
```

## 📦 Project Structure

```
src/
├── app/          # Application components
├── assets/       # Static assets
├── environments/ # Environment configurations
└── ...
```

## 🛠️ Built With

- [Angular](https://angular.io/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Angular CLI](https://cli.angular.io/) - Command line interface

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Kareem Saad - Initial work

## 🚀 Deployment

### Deploying to Vercel

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Build your Angular project:
```bash
ng build --configuration production
```

3. Deploy to Vercel:
```bash
vercel
```

Alternatively, you can deploy directly from the Vercel dashboard:

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure your project:
   - Framework Preset: Angular
   - Build Command: `ng build`
   - Output Directory: `dist/portfolio`
   - Install Command: `npm install`
6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`