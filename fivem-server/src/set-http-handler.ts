import { HttpHandler } from '@ivanzaida/structures'

/**
 * CFX:SET_HTTP_HANDLER
 *
 * 0xF5C6330C

 * Sets the handler for HTTP requests made to the executing resource.Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.The handler function assumes the following signature:```tsfunction HttpHandler(request: {address: string;headers: Record<string, string>;method: string;path: string;setDataHandler(handler: (data: string) => void): void;setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;setCancelHandler(handler: () => void): void;},response: {writeHead(code: number, headers?: Record<string, string | string[]>): void;write(data: string): void;send(data?: string): void;}): void;```- request: The request object.- address: The IP address of the request sender.- path: The path to where the request was sent.- headers: The headers sent with the request.- method: The request method.- setDataHandler: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).- setCancelHandler: Sets the handler for when the request is cancelled.- response: An object to control the response.- writeHead: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.- write: Writes to the response body without sending it. Can be called multiple times.- send: Writes to the response body and then sends it along with the status code & headers, finishing the request.
 * 
 * ------------------------------------------------------------------
 * @param {HttpHandler} handler The handler function.
 */
export function setHttpHandler(handler: HttpHandler): void {
	const setHttpHandler_result = Citizen.invokeNative<void>('0xF5C6330C', handler);
	return setHttpHandler_result;
}