import axios from 'axios';

export default function getJoke(
  categories = 'Any',
  language = '',
  blackListFlag = '',
  jokeType = 'single',
  jokeString = '',
  idRange = '',
  amount = ''
) {
  const URL = 'https://v2.jokeapi.dev/joke/Any';
  return axios.get(URL).then((res) => {
    return res.data;
  });
}
