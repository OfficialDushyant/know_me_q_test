import React, { useState, useContext } from "react";

const TestContext = React.createContext({
    login: false,
    userInfo: {},
    tests: [],
    currentTestQuestions: [],
    userAnswers: [],
    completedTestResult: [0, 0],
    setUserAnswer: () => {},
    setResult: () => {},
    setLogIn: () => {},
    setTest: () => {},
    setCompletedTestResult: () => {},
    setUserInfo: () => {}
});

export function useTest() {
    return useContext(TestContext);
}

export const TestContextProvider = (props) => {
    const [login, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [tests, setTest] = useState([]);
    const [currentTestQuestions, setCurrentTestQuestions] = useState([]);
    const [userAnswers, setUserAnswer] = useState([]);
    const [completedTestResult, setCompletedTestResult] = useState([0, 0]);

    return (
    <TestContext.Provider
        value={{
            login,
            tests,
            currentTestQuestions,
            userAnswers,
            completedTestResult,
            userInfo,
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
            },
            setUserInfo: (user) => {
                setUserInfo(user)
            }
        }}
    >
        {props.children}
    </TestContext.Provider>
    );
};