import { createFileRoute } from '@tanstack/react-router'
import { Show, SignIn, useUser } from '@clerk/tanstack-react-start'

export const Route = createFileRoute('/demo/clerk')({
  component: ClerkDemo,
})

function ClerkDemo() {
  return (
    <main className="demo-page demo-center">
      <section className="demo-panel w-full max-w-md space-y-6">
        <Show when="signed-out">
          <div className="space-y-1.5">
            <p className="island-kicker mb-2">Clerk</p>
            <h1 className="demo-title">Entre para continuar</h1>
            <p className="demo-muted text-sm">
              O Clerk exibe a interface de login, gerencia sessões e permite
              entrar com suas contas de outros serviços.
            </p>
          </div>
          <div className="flex justify-center pt-2">
            <SignIn routing="hash" />
          </div>
          <p className="demo-muted text-center text-xs">
            Desenvolvido com{' '}
            <a
              href="https://clerk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              CLERK
            </a>
            .
          </p>
        </Show>

        <Show when="signed-in">
          <SignedInGreeting />
        </Show>
      </section>
    </main>
  )
}

function SignedInGreeting() {
  const { user } = useUser()
  if (!user) return null

  const email = user.primaryEmailAddress?.emailAddress
  const initial = (user.firstName || email || 'U').charAt(0).toUpperCase()

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <p className="island-kicker mb-2">Clerk</p>
        <h1 className="demo-title">Que bom ter você de volta!</h1>
        <p className="demo-muted text-sm">Você entrou como {email}</p>
      </div>

      <div className="flex items-center gap-3">
        {user.imageUrl ? (
          <img src={user.imageUrl} alt="" className="h-10 w-10 rounded-full" />
        ) : (
          <div className="h-10 w-10 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center rounded-full">
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {initial}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
            {email}
          </p>
        </div>
      </div>

      <p className="demo-muted text-center text-xs">
        Gerencie sua conta pela foto de perfil no cabeçalho. Desenvolvido com{' '}
        <a
          href="https://clerk.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
        >
          CLERK
        </a>
        .
      </p>
    </div>
  )
}
