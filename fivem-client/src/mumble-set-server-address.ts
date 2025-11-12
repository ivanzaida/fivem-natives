/**
 * CFX:MUMBLE_SET_SERVER_ADDRESS
 *
 * 0xE6EB2CD8

 * Changes the Mumble server address to connect to, and reconnects to the new address.Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.
 * 
 * ------------------------------------------------------------------
 * @param {string} address The address of the mumble server.
 * @param {number} port The port of the mumble server.
 */
export function mumbleSetServerAddress(address: string, port: number): void {
	const mumbleSetServerAddress_result = Citizen.invokeNative<void>('0xE6EB2CD8', address, port);
	return mumbleSetServerAddress_result;
}