# Contributing to MatMoto-PomenPro

Thank you for your interest in contributing to MatMoto-PomenPro! This document provides guidelines and instructions for contributing to this project.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```
   git clone https://github.com/your-username/MatMoto-PomenPro.git
   cd MatMoto-PomenPro
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a branch for your feature:
   ```
   git checkout -b feature/your-feature-name
   ```

## Development

### Running the Application

```
npm run dev
```

The application will be available at http://localhost:3000.

### Code Style

- Follow the existing code style in the project
- Use meaningful variable and function names
- Write comments for complex logic
- Use proper indentation (2 spaces)

### Commit Guidelines

- Use clear and descriptive commit messages
- Reference issue numbers in commit messages when applicable
- Make small, focused commits rather than large changes

## Pull Requests

1. Update your fork to the latest upstream changes
2. Push your branch to GitHub
3. Open a pull request against the main branch
4. Provide a clear description of the changes
5. Link any related issues

## Adding New Vehicle Brands

To add support for a new vehicle brand:

1. Create a new data file in `app/lib/[brand]-parts-data.js`
2. Create a scanner component in `app/components/scanner/[Brand]PartScanner.js`
3. Create a scanner page in `app/scanner/[brand]/page.js`
4. Update the main scanner page to include a link to the new brand scanner

## Translations

- Add new translations to both English (en) and Bahasa Melayu (ms) in `app/lib/translations.js`
- Ensure all user-facing text is properly translated

## Testing

- Test your changes thoroughly before submitting a pull request
- Ensure the application works in both English and Bahasa Melayu
- Test on different devices and screen sizes

## License

By contributing to MatMoto-PomenPro, you agree that your contributions will be licensed under the project's license.