/**
 * ZONE:GET_NAME_OF_ZONE
 *
 * 0xDAEDE051F3F4FD45

 * AIRP = Los Santos International Airport
 * ALAMO = Alamo Sea
 * ALTA = Alta
 * ARMYB = Fort Zancudo
 * BANHAMC = Banham Canyon Dr
 * BANNING = Banning
 * BEACH = Vespucci Beach
 * BHAMCA = Banham Canyon
 * BRADP = Braddock Pass
 * BRADT = Braddock Tunnel
 * BURTON = Burton
 * CALAFB = Calafia Bridge
 * CANNY = Raton Canyon
 * CCREAK = Cassidy Creek
 * CHAMH = Chamberlain Hills
 * CHIL = Vinewood Hills
 * CHU = Chumash
 * CMSW = Chiliad Mountain State Wilderness
 * CYPRE = Cypress Flats
 * DAVIS = Davis
 * DELBE = Del Perro Beach
 * DELPE = Del Perro
 * DELSOL = La Puerta
 * DESRT = Grand Senora Desert
 * DOWNT = Downtown
 * DTVINE = Downtown Vinewood
 * EAST_V = East Vinewood
 * EBURO = El Burro Heights
 * ELGORL = El Gordo Lighthouse
 * ELYSIAN = Elysian Island
 * GALFISH = Galilee
 * GOLF = GWC and Golfing Society
 * GRAPES = Grapeseed
 * GREATC = Great Chaparral
 * HARMO = Harmony
 * HAWICK = Hawick
 * HORS = Vinewood Racetrack
 * HUMLAB = Humane Labs and Research
 * JAIL = Bolingbroke Penitentiary
 * KOREAT = Little Seoul
 * LACT = Land Act Reservoir
 * LAGO = Lago Zancudo
 * LDAM = Land Act Dam
 * LEGSQU = Legion Square
 * LMESA = La Mesa
 * LOSPUER = La Puerta
 * MIRR = Mirror Park
 * MORN = Morningwood
 * MOVIE = Richards Majestic
 * MTCHIL = Mount Chiliad
 * MTGORDO = Mount Gordo
 * MTJOSE = Mount Josiah
 * MURRI = Murrieta Heights
 * NCHU = North Chumash
 * NOOSE = N.O.O.S.E
 * OCEANA = Pacific Ocean
 * PALCOV = Paleto Cove
 * PALETO = Paleto Bay
 * PALFOR = Paleto Forest
 * PALHIGH = Palomino Highlands
 * PALMPOW = Palmer-Taylor Power Station
 * PBLUFF = Pacific Bluffs
 * PBOX = Pillbox Hill
 * PROCOB = Procopio Beach
 * RANCHO = Rancho
 * RGLEN = Richman Glen
 * RICHM = Richman
 * ROCKF = Rockford Hills
 * RTRAK = Redwood Lights Track
 * SANAND = San Andreas
 * SANCHIA = San Chianski Mountain Range
 * SANDY = Sandy Shores
 * SKID = Mission Row
 * SLAB = Stab City
 * STAD = Maze Bank Arena
 * STRAW = Strawberry
 * TATAMO = Tataviam Mountains
 * TERMINA = Terminal
 * TEXTI = Textile City
 * TONGVAH = Tongva Hills
 * TONGVAV = Tongva Valley
 * VCANA = Vespucci Canals
 * VESP = Vespucci
 * VINE = Vinewood
 * WINDF = Ron Alternates Wind Farm
 * WVINE = West Vinewood
 * ZANCUDO = Zancudo River
 * ZP_ORT = Port of South Los Santos
 * ZQ_UAR = Davis Quartz
 * Full list of zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/zones.json
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @returns {string}  
 */
export function getNameOfZone(coorsX: number, coorsY: number, coorsZ: number): string {
	const getNameOfZone_result = Citizen.invokeNative<string>('0xDAEDE051F3F4FD45', coorsX, coorsY, coorsZ);
	return getNameOfZone_result;
}