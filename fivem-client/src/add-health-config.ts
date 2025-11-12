/**
 * CFX:ADD_HEALTH_CONFIG
 *
 * 0x9CBFD5C1

 * Adds new health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config. Cannot be default game health config name.
 * @param {number} defaultHealth Default health value.
 * @param {number} defaultArmor Default armor value.
 * @param {number} defaultEndurance
 * @param {number} fatiguedHealthThreshold Fatigued health threshold value.
 * @param {number} injuredHealthThreshold Injured health threshold value.
 * @param {number} dyingHealthThreshold Dying health threshold value.
 * @param {number} hurtHealthThreshold Hurt health threshold value.
 * @param {number} dogTakedownThreshold Dog takedown threshold value.
 * @param {number} writheFromBulletThreshold Writhe from bulled threshold value.
 * @param {boolean} meleeCardinalFatalAttack Melee cardinal fatal attack check value.
 * @param {boolean} invincible Invincible value.
 */
export function addHealthConfig(configName: string, defaultHealth: number, defaultArmor: number, defaultEndurance: number, fatiguedHealthThreshold: number, injuredHealthThreshold: number, dyingHealthThreshold: number, hurtHealthThreshold: number, dogTakedownThreshold: number, writheFromBulletThreshold: number, meleeCardinalFatalAttack: boolean, invincible: boolean): void {
	const addHealthConfig_result = Citizen.invokeNative<void>('0x9CBFD5C1', configName, defaultHealth, defaultArmor, defaultEndurance, fatiguedHealthThreshold, injuredHealthThreshold, dyingHealthThreshold, hurtHealthThreshold, dogTakedownThreshold, writheFromBulletThreshold, meleeCardinalFatalAttack, invincible);
	return addHealthConfig_result;
}