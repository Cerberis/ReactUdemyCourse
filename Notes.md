VS Code/ Cursor Extensions:

ESlint - code linter. Automatically finds issues.
Prettier -  Automatically formats code.
Material icons - shows file icons
One Monokai - IDE theme
Quokka - Runtime values are updated and displayed in your IDE
Color Highlight - shows true color based on color code

Browser extensions:
React Developer Tools - for debugging code on browser

Methods:
sort - orders array by field (mutates original array)
reduce - aggregates array
filter - filters out data by expression
map - maps data to different object
    update 1 entry in array: .map((x) => x.id === 1 ? {} : x);
slice - creates copy of array to prevent mutations
fetch - calls endpoint

Updating filtered entry in array:
 setNewValues((valueArray) =>
      valueArray.map((arrayEntry) =>
        arrayEntry.id === selectedEntry.id
          ? { ...arrayEntry, balance: selectedEntry + value }
          : arrayEntry
      )
    );

UseEffect example:
  useEffect(function () {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);

Local storage:
Set - localStorage.setItem('watched', JSON.stringify(watched));
Get - localStorage.getItem('watched');
return JSON.parse(storedValue);


CLI Commands:
new app creation - npx create-react-app my-app
launching project - npm start 

Shortcuts:
CTRL + / - code comment toggle
CTRL + ALT + O - fixes imports 