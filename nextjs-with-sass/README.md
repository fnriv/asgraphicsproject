# Next.js with Sass

This project is a Next.js application configured to use Sass for styling. Below are the details on how to set up and use the project.

## Getting Started

### Prerequisites

- Node.js (version 12.22.0 or later)
- npm (version 6.14.0 or later)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd nextjs-with-sass
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Development Server

To start the development server, run:

```
npm run dev
```

This will start the Next.js application in development mode. You can view it in your browser at `http://localhost:3000`.

### Project Structure

- **app/**: Contains the main application files.
  - **layout.tsx**: Defines the layout component for the application.
  - **page.tsx**: Main page component.
  - **styles/**: Contains global and variable styles.
    - **globals.scss**: Global styles for the application.
    - **variables.scss**: Sass variables for consistent theming.

- **components/**: Contains reusable components and their styles.
  - **styles/**: Styles specific to components.
    - **components.scss**: Styles for buttons, cards, etc.

- **pages/**: Contains the custom App component.
  - **_app.tsx**: Initializes pages and includes global styles.

- **public/**: Contains static assets like images and fonts.

- **styles/**: Main stylesheet and mixins.
  - **main.scss**: Main stylesheet for the application.
  - **mixins.scss**: Sass mixins for reusable styles.

- **next.config.js**: Configuration file for Next.js.

- **package.json**: Lists dependencies and scripts for the project.

## Usage

You can start building your application by modifying the files in the `app` and `components` directories. Use the provided Sass files to style your components and pages.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License.