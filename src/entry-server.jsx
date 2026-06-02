import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import AppRoutes from './AppRoutes.jsx'
import { ThemeProvider } from './lib/theme.jsx'
import { projects } from './data/projects.js'

export { getMeta, SITE_URL } from './lib/seo.js'

/** Todas as rotas que devem virar HTML estático no build. */
export const routes = ['/', ...projects.map((p) => `/projetos/${p.slug}`)]

/** Renderiza a árvore React para HTML em uma dada rota. */
export function render(pathname) {
  return renderToString(
    <ThemeProvider>
      <StaticRouter location={pathname}>
        <AppRoutes />
      </StaticRouter>
    </ThemeProvider>
  )
}
