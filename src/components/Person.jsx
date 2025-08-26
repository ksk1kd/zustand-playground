import { usePersonStore } from '../hooks/usePersonStore'

export function Person() {
  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)
  const resetPersonState = usePersonStore((state) => state.reset)

  return (
    <main>
      <label>
        First name
        <input
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>

      <button type="button" onClick={resetPersonState}>
        Reset
      </button>
    </main>
  )
}
