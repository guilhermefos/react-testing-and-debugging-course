import data from "../../data/courses.json";

const item = data[0];

describe("<Single />", () => {
  describe("Common Matchers", () => {
    // toBe uses Object.is to test exact equality
    test("two plus two is four", () => {
      expect(2 + 2).toBe(4);
    });
    // toEqual is used to check the values of an object
    test("the values of a item", () => {
      expect(item).toEqual({
        id: 1,
        title: "Building an App with ReactJS and MeteorJS",
        category: "react",
        description:
          "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform.",
        link:
          "https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html",
        release_date: "12/21/2016",
        views: "31,266",
        image:
          "https://cdn.lynda.com/course/533228/533228-636179098122239600-16x9.jpg"
      });
    });
  });

  describe("Thuthiness", () => {
    test("null", () => {
      const n = null;

      // matches only null
      expect(n).toBeNull();

      // matches only undefined
      expect(n).toBeUndefined();

      // is the opposite of toBeUndefined
      expect(n).not.toBeUndefined();

      // matches anything that an if statement treats as true
      expect(n).not.toBeTruthy();

      // matches anything that an if statement treats as false
      expect(n).toBeFalsy();
    });
  });

  describe("Numbers", () => {
    test("two plus two", () => {
      const value = 2 + 2;

      expect(value).toBeGreaterThan(3);
      expect(value).toBeGreaterThanOrEqual(3.5);
      expect(value).toBeLessThan(5);
      expect(value).toBeLessThanOrEqual(4.5);

      // toBe and toEqual are equivalent for numbers
      expect(value).toBe(4);
      expect(value).toEqual(4);
    });

    test("adding floating point numbers", () => {
      const value = 0.1 + 0.2;
      // expect(value).toBe(0.3) This won't work because of rouding error
      expect(value).toBeCloseTo(0.3); // This works
    });
  });

  describe("Strings", () => {
    test("there is no I in team", () => {
      expect("team").not.toMatch(/I/);
    });

    test("but there is a 'stop' in Christoph", () => {
      expect("Crhistoph").toMatch(/stop/);
    });
  });

  describe("Arrays and iterables", () => {
    //check if an array or iterable contains a particular item
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
    ];

    test("the shopping list has mil on it", () => {
      expect(shoppingList).toContain("milk");
      expect(new Set(shoppingList)).toContain("milk");
    });
  });

  describe("Exceptions", () => {
    function compileAndroidCode() {
      throw new Error("You are using the wrong JDK");
    }

    test("compiling android goes as expected", () => {
      expect(() => compileAndroidCode()).toThrow();
      expect(() => compileAndroidCode()).toThrow(Error);

      // checking the exact error message or a regexp
      expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK");
      expect(() => compileAndroidCode()).toThrow(/JDK/);
    })
  })
});
