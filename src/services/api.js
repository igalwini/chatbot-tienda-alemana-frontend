export async function askQuestion(question) {
  const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question })
  });

  if (!response.ok) throw new Error('Error al contactar al backend');

  const data = await response.json();
  return data.answer;
}
