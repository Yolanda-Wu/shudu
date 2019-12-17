// import { stringify } from "querystring";

const request = (function() {
  const GET = "GET";
  const POST = "POST";

  const request = (url, config = {}) =>
    new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
        ...config
      })
        .then(res => {
          res
            .json()
            .then(responseJson => {
              if (responseJson.status === 200) {
                // console.log("d");
                resolve(responseJson.data);
                // console.log(responseJson.data);
              } else {
                alert("fail request！");
              }
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          alert("error:", err.err_msg);
          reject(err);
        });
    });

  return {
    getRanks: () => request("/api/ranks", { method: GET }),
    updateRanks: data =>
      request("/api/ranks", { method: POST, body: JSON.stringify(data) })
  };
})();
