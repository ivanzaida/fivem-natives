export enum ECloudSaveFailureCodes {
	HttpCodeClientclosedrequest = 499, // client errors 4xx. Client Closed Request
	HttpCodeFilenotfound = 404, // File Not Found
	HttpCodeRequesttimeout = 408, // Request Timeout
	HttpCodeToomanyrequests = 429, // Too Many Requests
	HttpCodeAnyservererror = 500, // Server errors 5xx. Any HTTP server error
	HttpCodeGatewaytimeout = 504, // Gateway Timeout
	HttpCodeNetconnecttimeout = 599, // Network connect timeout error
}