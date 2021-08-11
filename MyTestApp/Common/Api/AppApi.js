import { callApi } from "../../libraries/Api";
/**
 *
 * Api call 
 * @param{requestData} Register user 
 * @returns
 */
export const signup = async (requestData = {}) => {
	const functionUrl = "users";
	if (requestData) {
		try {
			return await callApi(functionUrl, requestData)
				.then(async (response) => {
					console.log(response);
					if (response && response.status && response.result) {
						const result = response.result;
					}
					return response;
				})
				.catch((error) => {
					console.log("Error from API => ", error);
				});
		} catch (error) {
			console.log("Error from catch => ", error);
		}
	}
};