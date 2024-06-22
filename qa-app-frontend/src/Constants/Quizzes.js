export const quizzes = [
  {
    quizName: "ISTQB Foundation Quiz",
    questions:  [
      {
        id: 1,
        text:
          "1. An input field takes the year of birth between 1900 and 2004.The boundary values for testing this field are:",
        options: [
          "0,1900, 2004, 2005",
          "1900, 2004",
          "1899, 1900,1901,2003,2004,2005",
          "1899,1900,2004,2000",
        ],
        answer: "1899, 1900,1901,2003,2004,2005",
        explanation:
          "Boundary value testing involves testing at the boundaries between partitions.",
      },
      {
        id: 2,
        text: "2. Which one of the following is a non-functional testing method?",
        options: [
          "System testing",
          "Usability testing",
          "Performance testing",
          "Both B & C",
        ],
        answer: "Both B & C",
        explanation:
          "Non-functional testing focuses on aspects not related to specific behaviors or functions.",
      },
      {
        id: 3,
        text:
          "3. Which of the following tools would be involved in the automation of regression tests?",
        options: [
          "Data tester",
          "Boundary tester",
          "Capture/Playback",
          "Output comparator",
        ],
        answer: "Capture/Playback",
        explanation:
          "Capture/Playback tools are used to record and playback user actions to automate tests.",
      },
      {
        id: 4,
        text: "4. The incorrect form of logic coverage is:",
        options: [
          "Statement Coverage",
          "Pole Coverage",
          "Condition Coverage",
          "Path Coverage",
        ],
        answer: "Pole Coverage",
        explanation:
          "Pole Coverage is not a standard form of logic coverage used in testing.",
      },
    ],
  },
  {
    quizName: "Agile Tester Quiz",
    questions: [
      {
        id: 5,
        text:
          "1. Which of the following is not a quality characteristic listed in ISO 9126 Standard?",
        options: [
          "Functionality",
          "Usability",
          "Supportability",
          "Maintainability",
        ],
        answer: "Supportability",
        explanation:
          "Supportability is not one of the quality characteristics listed in ISO 9126 Standard.",
      },
      {
        id: 6,
        text:
          "2. To test a function, the programmer has to write a _________, which calls the process to be tested and passes its test data.",
        options: ["Stub", "Driver", "Proxy", "None of the above"],
        answer: "Driver",
        explanation:
          "A driver is a piece of code that calls a function to be tested and passes its test data.",
      },
      {
        id: 7,
        text: "3. Boundary value testing:",
        options: [
          "It is the same as equivalence partitioning tests",
          "Test boundary conditions on, below and above the edges of input and output equivalence classes",
          "Tests combinations of input circumstances",
          "It is used in the white box testing strategy",
        ],
        answer:
          "Test boundary conditions on, below and above the edges of input and output equivalence classes",
        explanation:
          "Boundary value testing focuses on values at the boundaries of input and output equivalence classes.",
      },
      {
        id: 8,
        text: "4. Pick the best definition of quality:",
        options: [
          "Quality is job one",
          "Zero defects",
          "Conformance to requirements",
          "Work as designed",
        ],
        answer: "Conformance to requirements",
        explanation:
          "Quality is defined as the degree to which a product conforms to specified requirements.",
      },
    ],
  },
  {
    quizName: "Test Automation Engineer",
    questions: [
      {
        id: 9,
        text: "1. Fault Masking is:",
        options: [
          "Error condition hiding another error condition",
          "Creating a test case that does not reveal a fault",
          "Masking a fault by a developer",
          "Masking a fault by a tester",
        ],
        answer: "Error condition hiding another error condition",
        explanation:
          "Fault masking occurs when one error condition hides another error condition.",
      },
      {
        id: 10,
        text:
          "2. One Key reason why developers have difficulty testing their work is:",
        options: [
          "Lack of technical documentation",
          "Lack of test tools on the market for developers",
          "Lack of training",
          "Lack of Objectivity",
        ],
        answer: "Lack of Objectivity",
        explanation:
          "Developers often lack objectivity in testing their own work because they are too close to it.",
      },
      {
        id: 11,
        text: "3. Acceptance test cases are based on what?",
        options: ["Requirements", "Design", "Code", "Decision table"],
        answer: "Requirements",
        explanation:
          "Acceptance test cases are derived from the requirements to ensure the system meets them.",
      },
      {
        id: 12,
        text: "4. Code Coverage is used as a measure of what?",
        options: [
          "Defects",
          "Trends analysis",
          "Test Effectiveness",
          "Time Spent Testing",
        ],
        answer: "Test Effectiveness",
        explanation:
          "Code coverage measures the extent to which the source code is tested by a test suite.",
      },
    ],
  },
  {
    quizName: "ISTQB Foundation: Static Testing",
    questions: [
      {
        id: 13,
        text: "1. Which of the following work products are examinable by testing?",
        options: [
          "Only source code",
          "Only test cases",
          "Any tangible work product including code, specifications, designs, and documents",
          "Only test plans",
        ],
        answer: "Any tangible work product including code, specifications, designs, and documents",
        explanation:
          "Almost any work product can be examined by static testing. It must follow a specific structure and be readable and understandable by the reviewers",
      },
      {
        id: 14,
        text:
          "2. Which of the following is NOT a benefit of static testing?",
        options: [
          "Early defect detection",
          "Reduction in testing costs",
          "Identification of issues in requirements and design",
          "Identification of all issues dynamic testing can find but earlier in the lifecycle",
        ],
        answer: "Identification of all issues dynamic testing can find but earlier in the lifecycle",
        explanation:
          "Both static and dynamic testing can lead to the identification of different types of issues. Static testing is not a replacement for dynamic testing.",
      },
      {
        id: 15,
        text: "3. Which of the following would be considered a form of static analysis, as described in the text?",
        options: ["Examining code coverage reports to identify untested areas",
          "Running automated regression tests after a new software build",
          "Using a tool to check for inconsistent variable naming conventions",
          "Observing user behavior during usability testing"],
        answer: "Using a tool to check for inconsistent variable naming conventions",
        explanation:
          "While largely used to find code defects, static analysis is also used to evaluate maintainability and security.",
      },
      {
        id: 16,
        text: "4. Which of the following is a list of the work products that can't be checked by static analysis?",
        options: [
          "Test charters",
          "Test plans",
          "Test cases",
          "COTS software intended for data encryption and security",
        ],
        answer: "COTS software intended for data encryption and security",
        explanation:
          "Commercial off-the-shelf (COTS) software and services are built and delivered usually by a third party. They are not examinable by static testing.",
      },
    ],
  },
  {
    quizName: "ISTQB Foundation: Test Analysis and Design",
    questions: [
      {
        id: 17,
        text: "1. When might the use of white-box testing be limited or constrained?",
        options: [
          "If the system is very small and uncomplicated",
          "If the software development team uses TDD",
          "If the test team lack access to source code",
          "If the project prioritizes functional testing over structural testing",
        ],
        answer: "If the test team lack access to source code",
        explanation:
          "For white-box testing, the test team must have access to the source code",
      },
      {
        id: 18,
        text:
          "2. Which of the following is the LEAST likely reason to use experience-based testing?",
        options: [
          "Designing comprehensive test coverage around complex logic",
          "Identifying defects related to common user errors",
          "Testing with limited time and resources",
          "Descovering hidden or unexpected issues",
        ],
        answer: "Designing comprehensive test coverage around complex logic",
        explanation:
          "Experience-based testing is used when there is limited time and resources, or when the tester has limited access to the code or requirements.",
      },
      {
        id: 19,
        text: "3. Which of the following is NOT a black-box test technique?",
        options: [
            "Boundary Value Analysis",
            "Equivalence Partitioning",
            "Decision Table Testing",
            "Checklist-based Testing"],
        answer: "Checklist-based Testing",
        explanation:
          "Checklist-based testing is a static test technique, not a black-box test technique.",
      },
      {
        id: 20,
        text: "4. Which of the following is a white-box test technique?",
        options: [
          "Unit Testing",
          "Statement Testing",
          "Decision Table Testing",
          "Loop Testing",
        ],
        answer: "Statement Testing",
        explanation:
          "Statement testing is a white-box test technique that involves testing each statement in the code at least once.",
      },
    ],
  },
  {
    quizName: "ISTQB Foundation: Test Techniques",
    questions: [
      {
        id: 21,
        text: "1. Experience-based techniques are particularly valuable when:",
        options: [
          "They are unclear, ambiguous, or lack detail",
          "You need to achieve specific level of statement coverage",
          "The development team follows a strict Agile methodology",
          "You are working with a team of inexperienced testers",
        ],
        answer: "They are unclear, ambiguous, or lack detail",
        explanation:
          "Experience-based techniques are used when the requirements are unclear, ambiguous, or lack detail.",
      },
      {
        id: 22,
        text:
          "2. Which of the following is NOT a black-box test technique?",
        options: [
          "Statement Testing",
          "Equivalence Partitioning",
          "Decision Table Testing",
          "BVA",
        ],
        answer: "Statement Testing",
        explanation:
          "Statement testing is a white-box test technique that involves testing each statement in the code at least once.",
      },
      {
        id: 23,
        text: "3. A tester is analyzing a program module with multiple nested 'if-else statements'. Which test technique would be most appropriate?",
        options: [
            "White-box",
            "Black-box",
            "Experience-based",
            "Risk-based"
        ],
        answer: "White-box",
        explanation:
          "White-box testing is used to test the internal structure of the software, including the code.",
      },
      {
        id: 24,
        text: "4. Which of the following is a black-box test technique?",
        options: [
          "Checklist-based Testing",
          "Statement Testing",
          "Decision Table Testing",
          "Branch Testing",
        ],
        answer: "Decision Table Testing",
        explanation:
          "Decision table testing is a black-box test technique that involves testing combinations of inputs and outputs.",
      },
    ],
  },
  {
    quizName: "ISTQB Foundation: Test Tools and Automation",
    questions: [
      {
        id: 25,
        text: "1. What is the primary purpose of using test management tools?",
        options: [
          "To automate all testing activities and eliminate the need for manual testing",
          "To facilitate the process of compiling and executing code",
          "To manage test cases, plans, reports and track defects",
          "To enhance the performance of the software under test",
        ],
        answer: "To manage test cases, plans, reports and track defects",
        explanation:
          "Management tools increase the test process efficiency by facilitating management of SDLC artifacts and tracking defects.",
      },
      {
        id: 26,
        text:
          "2. What is a major benefit of implementing test automation in software testing?",
        options: [
          "It eliminates the need for test testing",
          "It reduces the time required for repetitive tasks",
          "It guarantees the detection of all defects",
          "It ensures that no manual testing is required",
        ],
        answer: "It reduces the time required for repetitive tasks",
        explanation:
          "Test automation reduces the time required for repetitive tasks, allowing testers to focus on more complex testing activities.",
      },
      {
        id: 27,
        text: "3. A tester needs to verify that a system can be easily installed in various environments. What tool category is helpful?",
        options: [
            "Static analysis tools",
            "Scalability and deployment standardization tools",
            "Defect tracking tools",
            "Test data generation tools"
        ],
        answer: "Scalability and deployment standardization tools",
        explanation:
          "Scalability and deployment standardization tools help verify that a system can be easily installed in various environments.",
      },
      {
        id: 28,
        text: "4. Which of the following is NOT a concern when automating tests?",
        options: [
          "Difficulty integrating test into the CI/CD pipeline",
          "Hidden costs associated with maintaining test tools",
          "Results leading to debates about the quality of the software",
          "The need to factor in training costs for testers",
        ],
        answer: "Results leading to debates about the quality of the software",
        explanation:
          "Automated tests should be designed to provide clear and unambiguous results that can be used to improve the quality of the software.",
      },
    ],
  },
  {
    quizName: "ISTQB Foundation: Test Management",
    questions: [
      {
        id: 29,
        text: "1. Which is NOT a goal of configuration management in testing?",
        options: [
          "Unique identifying all configuration items",
          "Controlling changes to configuration items through a formal process",
          "Tracking changes to configuration items",
          "Automating test execution",
        ],
        answer: "Automating test execution",
        explanation:
          "Configuration management is not concerned with automating test execution.",
      },
      {
        id: 30,
        text:
          "2. Which of the following is NOT a responsibility of Configuration Management?",
        options: [
          "Identifying and controlling test plans, strategies, and scripts",
          "Tracking changes and versions of test environments",
          "Deciding the priority of defects",
          "Maintaining records of changes to test items",
        ],
        answer: "Deciding the priority of defects",
        explanation:
          "Configuration management is not responsible for prioritizing defects.It helps track them.",
      },
      {
        id: 31,
        text: "3. What is the purpose of maintaining a baseline in Configuration Management?",
        options: [
            "To allow for unrestricted changes to the test environment",
            "To provide a reference point",
            "To eliminate the need for continuous integration with DevOps pipeline",
            "To automate the identification of test cases",
        ],
        answer: "To provide a reference point",
        explanation:
          "A baseline is a reference point that allows for the comparison of changes to the test environment over time.",
      },
      {
        id: 32,
        text: "4. During testing of a financial application, a critical bug which causes incorrect calculations is found. Which process is best for identifying the change which introduced the bug?",
        options: [
          "Test Data Management",
          "Configuration Management",
          "Incident Management",
          "Test Environment Management",
        ],
        answer: "Configuration Management",
        explanation:
          "Configuration management helps track changes to the software and can identify the change that introduced the bug.",
      },
    ],
  },
  {
    quizName: "ISTQB Foundation: Testing throughout the Software Life Cycle",
    questions: [
      {
        id: 33,
        text: "1. Choose from below the definition of 'defect density'",
        options: [
          "Number of defects per unit size of work product",
          "Ratio of number of test cases run to the number of defects found",
          "Ratio of number of defects found to the number of fixed defects",
          "Ratio of number of defects found in production to the number of defects found in testing",
        ],
        answer: "Number of defects per unit size of work product",
        explanation:
          "Defect density is the number of defects per unit size of work product.",
      },
      {
        id: 34,
        text:
          "2. What should a Test Progress Report include?",
        options: [
          "Test summary and product quality evaluation",
          "New and changed risks within the testing period",
          "Unmitigated risks and defects not fixed",
          "Relevant lessons learned",
        ],
        answer: "Test summary and product quality evaluation",
        explanation:
          "A test progress report should include a summary of testing activities and an evaluation of the product quality.",
      },
      {
        id: 35,
        text: "3. Which of the following is NOT is not a typical means of communicating test to stakeholders?",
        options: [
            "Verbal communication during meetings",
            "Dashboards displaying test progress",
            "Test data and test environment elements",
            "Formal test reports summarizing test activities",
        ],
        answer: "Test data and test environment elements",
        explanation:
          "Stakeholders typically need to know the status of testing activities, not the specific test data and environment elements.",
      },
      {
        id: 36,
        text: "4. Which metric is not aligned with evaluating the risk that remains after testing is complete?",
        options: [
          "Defect density",
          "Residual Risk Level",
          "Availability",
          "Code Coverage",
        ],
        answer: "Availability",
        explanation:
          "Availability is not a metric used to evaluate the risk that remains after testing is complete. It refers to the uptime of a system.",
      },
    ],
  },
  {
    quizName: "Certified Tester Automotive Software",
    questions: [
      {
        id: 37,
        text: "1. Which of the following is a primary benefit of test automation?",
        options: [
          "It completely eliminates the need for manual testing",
          "It provides earlier defect detection and faster feedback",
          "It guarantees 100% test coverage",
          "It lowers the required skill level of testers",
        ],
        answer: "It provides earlier defect detection and faster feedback",
        explanation:
          "Test automation provides earlier defect detection and faster feedback to the development team.",
      },
      {
        id: 38,
        text:
          "2. A tester needs to evaluate the percentage of different code branches executed by a test suite. Which tool would be most helpful?",
        options: [
          "Test management tools",
          "Coverage management tools",
          "Static analysis tools",
          "Defect tracking tools",
        ],
        answer: "Coverage management tools",
        explanation:
          "Coverage management tools are used to evaluate the extent to which the source code is tested by a test suite.",
      },
      {
        id: 39,
        text: "3. Which of the following tools would be the MOST suitable for automating the execution of regression tests?",
        options: [
            "Test execution tools",
            "Test management tools",
            "Static analysis tools",
            "Defect tracking tools",
        ],
        answer: "Test execution tools",
        explanation:
          "Test execution tools are used to automate the execution of test cases, including regression tests.",
      },
      {
        id: 40,
        text: "4. Which is a potential risk associated with test automation?",
        options: [
          "Increased efficiency in regression testing",
          "Improved consistency in test execution",
          "More in-depth test coverage for complex scenarios",
          "Over-reliance on automated results, reducing critical thinking",
        ],
        answer: "Over-reliance on automated results, reducing critical thinking",
        explanation:
          "A potential risk of test automation is over-reliance on automated results, which can reduce critical thinking and lead to missed defects.",
      },
    ],
  },
];
