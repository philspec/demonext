let counter = 0

export async function POST() {
  counter++
  return Response.json({ count: counter })
}