import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Sobre</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Um projeto inicial simples, com espaço para crescer.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          O TanStack Start oferece rotas com segurança de tipos, funções de servidor
          e renderização moderna no servidor. Use esta base para adicionar
          suas próprias rotas, estilos e funcionalidades.
        </p>
      </section>
    </main>
  )
}
