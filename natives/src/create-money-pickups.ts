import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_MONEY_PICKUPS
 *
 * 0x24703703CFA1C70A

 * Spawns one or more money pickups.
 * x: The X-component of the world position to spawn the money pickups at.
 * y: The Y-component of the world position to spawn the money pickups at.
 * z: The Z-component of the world position to spawn the money pickups at.
 * value: The combined value of the pickups (in dollars).
 * amount: The number of pickups to spawn.
 * model: The model to use, or 0 for default money model.
 * Example:
 * CREATE_MONEY_PICKUPS(x, y, z, 1000, 3, 0x684a97ae);
 * Spawns 3 spray cans that'll collectively give $1000 when picked up. (Three spray cans, each giving $334, $334, $332 = $1000).
 * ==============================================
 * Max is 2000 in MP. So if you put the amount to 20, but the value to $400,000 eg. They will only be able to pickup 20 - $2,000 bags. So, $40,000
 * 
 * ------------------------------------------------------------------
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {number} amount
 * @param {number} maxNumPickups
 * @param {ModelNames} customModel If set this model will be used for the pickup instead of the default one
 */
export function createMoneyPickups(newCoorsX: number, newCoorsY: number, newCoorsZ: number, amount: number, maxNumPickups: number, customModel: ModelNames = 0): void {
	const createMoneyPickups_result = Citizen.invokeNative<void>('0x24703703CFA1C70A', newCoorsX, newCoorsY, newCoorsZ, amount, maxNumPickups, customModel);
	return createMoneyPickups_result;
}