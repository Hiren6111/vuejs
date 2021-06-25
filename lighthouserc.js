module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        url: ['http://localhost:3000/'],
        startServerCommand: 'npm run dev',
      },
      assert: {
        assertions: {
          "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        },
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };
  
