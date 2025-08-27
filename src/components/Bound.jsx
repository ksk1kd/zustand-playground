import { useBoundStore } from '../hooks/useBoundStore'

export function Bound() {
  const bears = useBoundStore((state) => state.bears)
  const fishes = useBoundStore((state) => state.fishes)
  const addBearAndFish = useBoundStore((state) => state.addBearAndFish)

  return (
    <>
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button type="button" onClick={() => addBearAndFish()}>
        Add a bear
      </button>
    </>
  )
}
