# Qilin Software Lab - Junior React Developer Pre-Assessment

## Getting Started

Install dependencies: `npm install` or `yarn install`.

## Code Explanation

1. App.js file contains logic for routing and lay loading which is a technique for boosting performance of React app. Suspense component is used and it is wrapped around component which is lazy loaded and it is used to show fallback UI till the actual component is loaded. Navigate through the tabs for code implementation and results of given tasks.

2. RegistrationForm.js contains logic for form validation. Using function customizable errors are thrown. RegistrationForm is a controlled component meaning that its values are handled by React states.

3. GitHubUser.js contains logic for fetching user's github information through API. GitHubUser gets username from SearchBar component which contains logic for search bar and getting username from user. Based on received props i.e, username we can dynamically fetched data of different users. Here custom hook is being used as for getting list of repos we have to again call api and its logic is same. For reducing redundanant code and to implement reusability custom hook is created which return data and error.

4. ThemeContext is created for showing implementation of context API. Context API is used to avoid prop drilling which occurs when two siblings or deeply nested component wants to share data. Based on value of theme simple text is being displayed.

5. Higher Order Component Logger.js is created to observe lifecycle method of wrapped component. A very simple component is created. Functional component doesn't have lifecycle methods instead React hooks are used. Tracking of lifecycle of wrapped component is implemented using both class component as well as functional component.
