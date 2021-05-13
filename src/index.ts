import App from '@app/App';

const target = document.getElementById('app');

if (!target) throw new Error('No such target');

const app = new App({ target });

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
