# Side Project 

## Getting Started

### Prerequisites
- Node.js (version v21.7.1)
- npm (version 10.5.0)

### Installation
- 1. Clone the repository
    ```bash
    git clone [your-repo-link]
    cd [repository-name]
    ```
- 2. Install dependencies
    ```bash
    npm install
    ```
- 3. Start the development server
     ```bash
    npm run dev
    ```

## Project Structure
root/
├── dist/ # Compiled files
│ └── output.css # Compiled Tailwind CSS
├── public/ # Static assets
│ └── assets/
│ ├── icons/ # Icon files
│ └── images/ # Image files
├── src/ # Source files
│ ├── css/
│ │ └── style.css # Main CSS file with Tailwind directives
│ ├── js/
│ │ └── main.js # Main JavaScript file
│ └── pages/
│ └── login.html # HTML pages


## Development

- Tailwind CSS is configured to watch for changes in `src` and `public` directories
- The compiled CSS is output to `dist/output.css`
- Keep the development server running (`npm run dev`) while making changes

## Technologies

- HTML
- Tailwind CSS
- JavaScript