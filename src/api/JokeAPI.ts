import axios from 'axios';

export default function getJoke(type: string = '', categories: string[] = []) {
  let URL = 'https://v2.jokeapi.dev/joke/';
  if (categories.length > 0) {
    categories.forEach((category) => {
      URL = URL + `${category},`;
    });
    URL = URL.slice(0, -1); // To remove , from the end of the URL
  } else {
    URL = URL + 'Any';
  }

  if (type) {
    URL = `${URL}?type=${type}`;
  }
  return axios.get(URL).then((res) => {
    return res.data;
  });
}
