# Contributing to Zooft Technologies Website

Thank you for your interest in contributing to the Zooft Technologies frontend project! This document outlines the recommended workflow for development, collaboration, and deployment.

## Development

- This project uses [Next.js](https://nextjs.org/) (React, TypeScript, Tailwind CSS).
- Clone the repository and install dependencies:
  ```bash
  git clone https://github.com/Zooft-Technologies/zooft-website.git
  cd zooft-website/website-frontend
  npm install
  ```
- Start the development server:
  ```bash
  npm run dev
  ```
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Make your changes in a new branch (see Collaboration below).

## Collaboration

### Branching Strategy

Create a feature branch for your work:
```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

### Pull Request Workflow

1. **Push your branch to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request:**
   - Go to the GitHub repository
   - Click "New Pull Request"
   - Select your branch and `main` as the target
   - Add a descriptive title and description

3. **Vercel Preview:**
   - Vercel will automatically create a preview deployment for your PR
   - Test your changes on the unique preview URL provided

4. **Code Review:**
   - Request a review from another team member
   - Address any feedback or comments
   - Only merge to `main` after review and successful preview

5. **Merge to Main:**
   - Once approved, merge your PR
   - This triggers an automatic production deployment

## Hosting & Deployment

- **Platform:** [Vercel](https://vercel.com/)
- **Production URL:** [https://zoofttechnologies.com](https://zoofttechnologies.com)
- **Auto-Deployment:** Every push to the `main` branch triggers automatic production deployment
- **Preview Deployments:** Every PR and branch push gets a unique Vercel preview URL for testing
- **No Manual Steps:** Deployment is fully automated—just push to GitHub!

## Environment Variables

If you need to add environment variables:
1. Add them in the Vercel dashboard under **Project Settings → Environment Variables**
2. Never commit sensitive information (API keys, tokens, etc.) to the repository
3. Add non-sensitive variables to `.env.example` for documentation

## Code Quality

### Linting & Formatting

Run linting before pushing:
```bash
npm run lint
```

### Building

Test your build locally:
```bash
npm run build
npm start
```

Ensure your build passes before opening a PR.

## Commit Messages

Use clear, descriptive commit messages following this format:

```
type(scope): short description

Optional longer explanation if needed.
```

Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, missing semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Tests
- `chore:` - Build, dependencies, tooling

Examples:
```
feat(hero): add animated project carousel
fix(navbar): resolve mobile menu alignment issue
docs: update deployment instructions
refactor(components): extract reusable button logic
```

## Project Structure

```
website-frontend/
├── src/
│   ├── app/              # Next.js pages and routes
│   ├── components/       # Reusable React components
│   ├── data/             # Static content and data
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and helpers
│   ├── services/         # API services
│   ├── types/            # TypeScript types
│   └── utils/            # Validation and helpers
├── public/               # Static assets
├── vercel.json          # Vercel configuration
└── next.config.ts       # Next.js configuration
```

## Testing Your Changes

1. **Local Development:**
   ```bash
   npm run dev
   ```
   Test your changes at http://localhost:3000

2. **Vercel Preview:**
   - Preview URL is provided automatically in your PR
   - Share and test with team members

3. **Production:**
   - Test on https://zoofttechnologies.com after merge

## Questions or Issues?

- Open an issue in the [GitHub repository](https://github.com/Zooft-Technologies/zooft-website)
- Contact the maintainers for questions
- Check existing issues before creating duplicates

---

Thank you for contributing to Zooft Technologies! 🚀
