import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';
import spinnerTemplate from './components/spinner/spinner.hbs';

const urls = [
  'data1.json',
  'data2.json',
  'data3.json',
  'data4.json'
];

document.addEventListener("DOMContentLoaded", function() {
  const root = $('#root');
  root.append(indexTemplate());
  const content = $('.content');
  let massivePromise = [];

  urls.forEach((item) => {
    massivePromise.push(fetch('api/' + item)
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          console.log(error.message);
        }))
  });
  content.append(spinnerTemplate);
  Promise.all(massivePromise)
      .then( (response) => {
        $('.spinner').remove();
        response.forEach((item) => {
          if(item) {
            item.data.forEach((element) => {
              content.append(articleTemplate(element));
          })
          }
        })
      })
  });

