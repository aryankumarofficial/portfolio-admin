# Portfolio Admin

A modern admin dashboard for managing portfolio content, built with Next.js, TypeScript, and shadcn/ui.

## Features

- **Authentication** - Secure login with JWT cookies
- **Messages Management** - View and manage contact form submissions
- **Projects Management** - CRUD operations for portfolio projects
- **Skills Management** - CRUD operations for skills section
- **Dark Mode** - Built-in theme support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/aryankumarofficial/portfolio-admin

# Install dependencies
bun install

# Start development server
bun run dev
```

The application will be available at `http://localhost:3000`.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://api.aryankumarofficial.dev
```

## Available Scripts

| Command             | Description               |
| ------------------- | ------------------------- |
| `npm run dev`       | Start development server  |
| `npm run build`     | Build for production      |
| `npm run start`     | Start production server   |
| `npm run lint`      | Run ESLint                |
| `npm run format`    | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type check |

## Adding Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add button
```

Components are placed in `components/ui/`.

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/           # React components
│   ├── ui/               # shadcn/ui components
│   └── ...              # Custom components
├── lib/                  # Utilities
├── stores/               # Zustand stores
├── public/               # Static assets
└── types/               # TypeScript types
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE)
