import { getAgenda, addToAgenda, removeFromAgenda } from "../lib/agenda";

beforeEach(() => {
  localStorage.clear();
});

test("adds and removes multiple session IDs to/from agenda", () => {
  const sessionIds = ["s1", "s2", "s3"];
  expect(getAgenda()).toEqual([]);
  sessionIds.forEach((id) => addToAgenda(id));
  expect(getAgenda()).toEqual(sessionIds);
  sessionIds.forEach((id) => removeFromAgenda(id));
  expect(getAgenda()).toEqual([]);
});
