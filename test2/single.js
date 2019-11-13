
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [{
        questions: [
            {
                type: "text",
                name: "employeeLastName",
                title: "(Last)",
                isRequired: true
            }, {
                type: "text",
                name: "employeeFirstName",
                startWithNewLine: false,
                title: "(First)",
                isRequired: true
            }, {
                type: "text",
                inputType: "date",
                isRequired: true,
                name: "birthDate",
                startWithNewLine: false,
                title: "Date of birth:"
            }, {
                type: "radiogroup",
                choices: [
                    {
                        value: "male",
                        text: "Male"
                    }, {
                        value: "female",
                        text: "Female"
                    }
                ],
                colCount: 0,
                isRequired: true,
                name: "sex",
                startWithNewLine: false,
                title: "Sex:"
            }, {
                type: "panel",
                name: "education",
                elements: [
                    {
                        type: "dropdown",
                        name: "schoolYearsCompleted",
                        title: "How many yeas of school have you completed?",
                        isRequired: true,
                        choicesMin: 0,
                        choicesMax: 12
                    }
                ],
                title: "Education"
            }, {
                type: "radiogroup",
                choices: [
                    "Retired", "Unemployed", "Homemaker", "Employed"
                ],
                colCount: 0,
                isRequired: true,
                name: "employmentStatus",
                title: "Your current employment status:"
            }, {
                type: "radiogroup",
                name: "syntaxtest",
                choices: [
                    "var x = 0;","var x == 0;","var x = 'A';","Var x = 0;"
                ],
                isRequired: true,
                title: "Which of the following is incorrect syntax:"
            }, {
                type: "radiogroup",
                name: "logictest",
                choices: [
                    "x = a+b/2;","x = (a+b/2);","x = (a+b)/2;","x = a+b*2;"
                ],
                isRequired: true,
                title: "Which of the following is not a logic error if you were calculating average:"
            }, {
                type: "radiogroup",
                name: "owner",
                choices: [
                    "Jake T.", "Adrian K.", "Julia B."
                ],
                isRequired: true,
                title: "Which of the following people is the owner of the company?",
                correctAnswer: "Jake T."
            },
            {
                type: "radiogroup",
                name: "company",
                choices: [
                    "Pharmaceuticals", "Cybersecurity", "Government Agency"
                ],
                isRequired: true,
                title: "Which sector does our company fall under?",
                correctAnswer: "Pharmaceuticals"
            }
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });