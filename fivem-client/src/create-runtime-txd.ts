/**
 * CFX:CREATE_RUNTIME_TXD
 *
 * 0x1F3AC778

 * Creates a runtime texture dictionary with the specified name.Example:```lualocal txd = CreateRuntimeTxd('meow')```
 * 
 * ------------------------------------------------------------------
 * @param {string} name The name for the runtime TXD.
 * @returns {number}  A handle to the runtime TXD.
 */
export function createRuntimeTxd(name: string): number {
	const createRuntimeTxd_result = Citizen.invokeNative<number>('0x1F3AC778', name);
	return createRuntimeTxd_result;
}