# beagle.js 🐶

beagle.js is a collection of lightweight JavaScript functions designed for quick and simple inspection of web pages. Each function is designed to be copy-pasted directly into a browser's console, giving instant insights into various aspects of the loaded webpage.

## 🚀 Getting Started

1. Navigate to the web page you wish to inspect.
2. Open your browser's developer tools.
3. Navigate to the 'Console' tab.
4. Copy the desired function from this repository and paste it into the console. Press `Enter`. Invoke it with `functionName();`

## 📜 Scripts

### `findInjectionPoints.js`

Scours the webpage for common points that might be susceptible to injections such as input fields, buttons, and more. Returns a table-format report of all elements discovered with their respective properties.

![findInjectionPoints](findInjectionPoints.png)

### `findLinks.js`

Identifies all anchor (<a>) tags on the webpage, categorizing them based on their URLs. Returns a table-format report detailing each link's URL, anchor text, and a flag indicating if it's external.

![findLinks](findLinks.png)

## 🙋 Contribution

If you have suggestions for additional scripts or improvements to existing ones, please open an issue or submit a pull request!

## 📄 License
This project is open source and available under the MIT License.
