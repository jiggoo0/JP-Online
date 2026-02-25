/**
 * @DESCRIPTION: PostCSS Config - Industrial Precision
 * We use Tailwind 4 CLI for pre-compilation to public/styles/global.css
 * to bypass Webpack's CSS parser limitations.
 */
module.exports = {
  plugins: {
    // Tailwind is handled via CLI as per GEMINI.md Public Static Strategy
    autoprefixer: {},
  },
};
