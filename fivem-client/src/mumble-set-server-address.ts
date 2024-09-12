/**
 * CFX:MUMBLE_SET_SERVER_ADDRESS
 *
 * 0XE6EB2CD8

 * Changes the Mumble server address to connect to, and reconnects to the new address.
 * 
 * ------------------------------------------------------------------
 * @param {string} address The address of the mumble server.
 * @param {number} port The port of the mumble server.
 */
export function mumbleSetServerAddress(address: string, port: number): void {
	const mumbleSetServerAddress_result = Citizen.invokeNative<void>('0XE6EB2CD8', address, port);
	return mumbleSetServerAddress_result;
}