import React, { useState, useContext } from "react";

const TestContext = React.createContext({
    login: false,
    tests: [],
    currentTestQuestions: [],
    userAnswers: [],
    completedTestResult: [0, 0],
    setUserAnswer: () => {},
    setResult: () => {},
    setLogIn: () => {},
    setTest: () => {},
    setCompletedTestResult: () => {}
});

export function useTest() {
    return useContext(TestContext);
}

export const TestContextProvider = (props) => {
    const [login, setIsLogin] = useState(false);
    const [test, setTest] = useState([]);
    const [currentTestQuestions, setCurrentTestQuestions] = useState([]);
    const [userAnswers, setUserAnswer] = useState([]);
    const [completedTestResult, setCompletedTestResult] = useState([0, 0]);

    return (
    <TestContext.Provider
        value={{
            login,
            test,
            currentTestQuestions,
            userAnswers,
            completedTestResult,
            setLogIn: (loginStatus) => {
                setIsLogin(loginStatus);
            },
            setTest: (test) => {
                setTest(test);
            },
            setCompletedTestResult: (result) => {
                setCompletedTestResult(result);
            },
            setCurrentTestQuestions: (questions) => {
                setCurrentTestQuestions(questions);
            },
            setUserAnswer: (answers) => {
                setUserAnswer(answers);
            }
        }}
    >
        {props.children}
    </TestContext.Provider>
    );
};