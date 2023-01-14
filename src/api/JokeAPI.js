import axios from 'axios';
// (categories = 'Any'),
//   (language = ''),
//   (blackListFlag = ''),
//   (jokeType = 'single'),
//   (jokeString = ''),
//   (idRange = ''),
//   (amount = '');

export default function getJoke(type) {
  let URL = 'https://v2.jokeapi.dev/joke/Any';
  if (type !== 'Any') {
    URL = `${URL}?type=${type}`;
  }
  return axios.get(URL).then((res) => {
    return res.data;
  });
}
