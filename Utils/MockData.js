export function mockApi1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "AAAAAAAAAA",
          marks: 10,
        },
        {
          id: 2,
          name: "BAAAAAAAAA",
          marks: 20,
        },
        {
          id: 3,
          name: "CAAAAAAAAA",
          marks: 30,
        },
        {
          id: 4,
          name: "DAAAAAAAAA",
          marks: 40,
        },
        {
          id: 5,
          name: "EAAAAAAAAA",
          marks: 50,
        },
        {
          id: 6,
          name: "FAAAAAAAAA",
          marks: 60,
        },
      ]);
    });
  });
}

