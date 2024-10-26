export async function GET() {
    const response = await fetch('https://api.agify.io/?name=sai')
    const data = await response.json()
    return Response.json(data)
  }