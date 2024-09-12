import { EHintType } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_COORD_HINT
 *
 * 0x861EAB644E1BBA7A

 * 
 * ------------------------------------------------------------------
 * @param {number} coordX
 * @param {number} coordY
 * @param {number} coordZ
 * @param {number} dwellTime How long cam looks at the entity.
 * @param {number} interpTo How long the interp to the hint is
 * @param {number} interpFrom How long the interp is from the iterp.
 * @param {EHintType} type
 */
export function setGameplayCoordHint(coordX: number, coordY: number, coordZ: number, dwellTime: number = 2000, interpTo: number = 2000, interpFrom: number = 2000, type: EHintType | number = 0): void {
	const setGameplayCoordHint_result = Citizen.invokeNative<void>('0x861EAB644E1BBA7A', coordX, coordY, coordZ, dwellTime, interpTo, interpFrom, type);
	return setGameplayCoordHint_result;
}