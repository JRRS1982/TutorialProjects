
- Context object createContext is a vessel for holding a default value or value from the parent component, which is used by the Consumer of the nested child, or is available in this.context of the nested child component. 
- Provider and Consumer.
    - Consumer (see Button.js) is always passed one argument, that argument is a function and that function is automatically called with whatever value is currently in the 'pipe' aka Provider. 

## Nesting

The components are currrently nested in such a way:

1. App
2. Language Context 
3. UserCreate
    - Field
    - Button

App is the root, so we are storing state in that, which is where the language is declared and can be read from. So in App, we are reading state.language and passing that into the LanguageContext.Provider, which is creating a context for anthing nested within it. 

.Provider is a React component that is created by the context system.

.Consumer is another component that is created by the context system. 