

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

const submitAPI = (formData) => true;

export const fetchTables = (date) => {

  let random = seededRandom(date.getDate());

  let TableStatus = []
  for (let i = 0; i < 13; i++) {
    if (random() <= 0.5) {TableStatus[i] = 1}
    else {TableStatus[i] = 0}
  }

  return TableStatus;
}

export { fetchAPI, submitAPI };
