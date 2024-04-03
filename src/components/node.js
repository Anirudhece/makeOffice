const nodes = [
    {
      id: 1,
      name: "Task 1",
      deadline: new Date(),
      type: "Type A",
      isComplete: false,
      nodes: [],
    },
    {
      id: 2,
      name: "Task 2",
      deadline: new Date(),
      type: "Type B",
      isComplete: true,
      nodes: [],
    },
]

export const data = [
    {
        id:1,
        packageName: "Civil 1",
        rate: "567.80",
        total: "2,98,6792",
        hasNestedData: true,
        nestedData: [
            {
                packageName: "Civil 1.1",
                rate: "567.80",
                total: "2,98,6792",
                hasNestedData: true,
                nestedData: [
                    {
                        packageName: "Civil 1.1.1",
                        rate: "567.80",
                        total: "2,98,6792",
                        hasNestedData: false,
                    }, {
                        packageName: "Civil 1.1.2",
                        rate: "567.80",
                        total: "2,98,6792",
                        hasNestedData: false,
                    }
                ]
            }
        ]
    },
    {
        packageName: "Civil 2",
        rate: "567.80",
        total: "2,98,6792",
        hasNestedData: true,
    },
    {
        packageName: "Civil 3",
        rate: "567.80",
        total: "2,98,6792",
          hasNestedDataa: true,
    },
    {
        packageName: "Civil 4",
        rate: "567.80",
        total: "2,98,6792",
        hasNestedData: true,
    },
    {
        packageName: "Civil 5",
        rate: "567.80",
        total: "2,98,6792",
        hasNestedData: true,
    },
];