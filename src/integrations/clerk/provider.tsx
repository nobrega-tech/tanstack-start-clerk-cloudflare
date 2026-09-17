import { ClerkProvider } from '@clerk/tanstack-react-start'
import { ptBR } from '@clerk/localizations'

export default function AppClerkProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClerkProvider localization={ptBR}>{children}</ClerkProvider>
}
