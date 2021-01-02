import data from "../../data/courses.json";

const numItems = data.length;

describe("Number test", () => {
  test("Number of items = 12", () => {
    expect(numItems).toBe(12);
  });

  test("Number of items less than 13", () => {
    expect(numItems).toBeLessThan(13);
  })

  test("Number of items to be greater than or equal to 12", () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const title = data[0].title;

describe("Title test", () => {
  test("There is a JS in this title", () => {
    expect(title).toMatch(/JS/);
  });

  test("The title contain React", () => {
    expect(title).toContain("React");
  });
});

// Arrays
const data2 = ["React Native", "React"];

describe("Array test", () => {
  test("The list of courses contains React Native and React", () => {
    expect(["React Native", "React", "MeteorJS"]).toEqual(
      expect.arrayContaining(data2)
    );
  });
});

describe("Object test", () => {
  test("The first course to have a property title", () => {
    expect(data[0]).toHaveProperty("title");
  });

  test("The first course to have a property title and value", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});
