/**
 * GRAPHICS:TERRAINGRID_SET_COLOURS
 *
 * 0x8FE53A17E3B48F44

 * 
 * This native is used along with these two natives: `TERRAINGRID_ACTIVATE` and `TERRAINGRID_SET_PARAMS`.
 * This native sets the colors for the golf putting grid. the 'min...' values are for the lower areas that the grid covers, the 'max...' values are for the higher areas that the grid covers, all remaining values are for the 'normal' ground height.
 * All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} lowR
 * @param {number} lowG
 * @param {number} lowB
 * @param {number} lowA
 * @param {number} midR
 * @param {number} midG
 * @param {number} midB
 * @param {number} midA
 * @param {number} highR
 * @param {number} highG
 * @param {number} highB
 * @param {number} highA
 */
export function terraingridSetColours(lowR: number, lowG: number, lowB: number, lowA: number, midR: number, midG: number, midB: number, midA: number, highR: number, highG: number, highB: number, highA: number): void {
	const terraingridSetColours_result = Citizen.invokeNative<void>('0x8FE53A17E3B48F44', lowR, lowG, lowB, lowA, midR, midG, midB, midA, highR, highG, highB, highA);
	return terraingridSetColours_result;
}