export const callApi = (
    functionUrl = null,
    requestBody = {},
    method = "POST",
    metaBody = false
) => {
    // setting Body
    const requestInfo = JSON.stringify(requestBody);
    // Setting the Herader
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": 'localhost:3001/',
    };

    const requestObj = {
        method,
        headers: headers,
        body: requestInfo,
    };

    if (metaBody) {
        requestBody["meta"] = metaBody;
    }
   
    
    try {
        // All core API will be called from here
        return fetch(functionUrl, requestObj)
            .then((response) => {
                handleErrors(response);
                const result = response.json();
                result.then((data) => {
                    // We are checking common errors
                    if (
                        data.status === false &&
                        data.result &&
                        data.result.error === "0002"
                    ) {
                        // Logout the user
                        console.log("Logout the user");
                    }
                });
                return result;
            })
            .catch(async (error) => {
                console.log("Erorr ", error);
                if(error.message === "Failed to fetch") {
                    AppConfig.clearStore();
                    User.clearStore();
                    BrowserRouter.replace('/');
                    console.log("API Error => HERE", error.message);
                }
                if (error.message === "Network request failed") {
                    Config.setApiError("network_bracked_call_again_this_call");
                }
                throw error;
            });
    } catch (error) {
        console.log("Error from catch => ", error);
        Config.setApiError("try_again");
    }
};
