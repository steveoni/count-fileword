## count-fileword

it count the number of time each word occur in a file. when a file is pass to it it return an object containing each word and their number of occurence

```javascript

var wordCount = require('count-fileword');

console.log(wordCount("file.txt"));
//if file is empty : return {}
```
and it can also be used with command line

```bash
npm count-fileword "file.js"
```

## uses

it can be used for data analysis: after each word count is gotten it can be used to draw graph . and when used with web scrapping modulen can be used to find the most popular word in a site

## MIT LICENSE

