const load = (raw) => (
  raw.data.map(item => ({
    id: item.Id,
    content: item.Content.replace('\\n', '<br />'),
    choices: item.Choices,
  }))
);

const body = (data) => ({
  user_id: Number(window.fb.id),
  answers: data,
});

const result = (raw) => ({
  score: raw.data.ProbabilityResult,
  social: raw.data.social_insights.map(s => ({
    id: s.id,
    children: s.children[0].children.map(c => ({
      name: c.name,
      percentage: c.percentage,
    }))
  })),
});

export default { load, body, result };