/**
 * DATAFILE:DATADICT_SET_VECTOR
 *
 * 0xD0DC0D28BA9FD4AD

 * 
 * This will overwrite any existing dictionary entry with the same name
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @param {number} valueX
 * @param {number} valueY
 * @param {number} valueZ
 */
export function datadictSetVector(dict: string, name: string, valueX: number, valueY: number, valueZ: number): void {
	const datadictSetVector_result = Citizen.invokeNative<void>('0xD0DC0D28BA9FD4AD', dict, name, valueX, valueY, valueZ);
	return datadictSetVector_result;
}