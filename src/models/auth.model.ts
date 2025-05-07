import { instance } from "@/utils/axios.utils";

const auth = {
  main_menu: (id: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = `documents/?main_menu=${id}`;
      instance()
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.error);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },

  sub_menu: (id: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = `sub-menus/?main_menu=${id}`;
      instance()
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.error);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },

  documentList: (id: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = `documents/?submenu=${id}`;
      instance()
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.error);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },
};

export default auth;
