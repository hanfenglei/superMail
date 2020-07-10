import originAxios from 'axios';

export default (option) => new Promise((resolve, reject) => {
  const instance = originAxios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return err;
    }
  );

  instance.interceptors.response.use(
    response => {
      return response.data;
    },
    err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误';
            break;
          case 401:
            err.message = '未授权的访问';
            break;
        }
      }

      return err;
    }
  );

  instance(option).then(res => {
    resolve(res);
  }).catch(e => {
    reject(e);
  });

});
