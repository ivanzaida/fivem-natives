/**
 * OBJECT:IS_GARAGE_EMPTY
 *
 * 0x988923E9EBDA2C20

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {boolean} onAllMachines If set then this will return true only if the garage is empty on all machines in multiplayer
 * @param {number} box
 * @returns {boolean}  
 */
export function isGarageEmpty(garageHash: number, onAllMachines: boolean = true, box: number = 1): boolean {
	const isGarageEmpty_result = Citizen.invokeNative<boolean>('0x988923E9EBDA2C20', garageHash, onAllMachines, box);
	return isGarageEmpty_result;
}