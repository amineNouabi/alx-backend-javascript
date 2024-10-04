export default function guardrail(mathfunction) {
  const queue = [];
  try {
    const division = mathfunction();
    queue.push(division);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
