import { Atmosphere, Clouds, Drizzle, Rain, Snow, Thunderstorm } from "../enum/weatherCodes";
import { IWeatherIcon } from "../interfaces/weatherIcon";
import cloud from '../assets/icons/cloud.png';
import sunCloud from '../assets/icons/sun_cloud.png';
import sun from '../assets/icons/sun.png';
import moonStars from '../assets/icons/moon_stars.png';
import cloudSlowWind from '../assets/icons/cloud_slow_wind.png';
import cloudFastWind from '../assets/icons/cloud_fast_wind.png';
import fastWinds from '../assets/icons/fast_winds.png';
import tornado from '../assets/icons/tornado.png';
import sunCloudLittleSnow from '../assets/icons/sun_cloud_little_snow.png';
import moonCloudLittleSnow from '../assets/icons/moon_cloud_little_snow.png';
import moonCloud from '../assets/icons/moon_cloud.png';
import sunCloudSnow from '../assets/icons/sun_cloud_snow.png';
import moonCloudSnow from '../assets/icons/moon_cloud_snow.png';
import cloudMidSnow from '../assets/icons/cloud_mid_snow.png';
import sunCloudHailstone from '../assets/icons/sun_cloud_hailstone.png';
import moonCloudHailstone from '../assets/icons/moon_cloud_hailstone.png';
import sunCloudLittleRain from '../assets/icons/sun_cloud_little_rain.png';
import moonCloudLittleRain from '../assets/icons/moon_cloud_little_rain.png';
import sunCloudMidRain from '../assets/icons/sun_cloud_mid_rain.png';
import moonCloudMidRain from '../assets/icons/moon_cloud_mid_rain.png';
import sunCloudBigRain from '../assets/icons/sun_cloud_big_rain.png';
import moonCloudBigRain from '../assets/icons/moon_cloud_big_rain.png';
import sunCloudAngledRain from '../assets/icons/sun_cloud_angled_rain.png';
import moonCloudAngledRain from '../assets/icons/moon_cloud_angled_rain.png';
import sunCloudZap from '../assets/icons/sun_cloud_zap.png';
import moonCloudZap from '../assets/icons/moon_cloud_zap.png';
import cloudZap from '../assets/icons/cloud_zap.png';
import cloud3zap from '../assets/icons/cloud_3_zap.png';
import zaps from '../assets/icons/zaps.png';
import cloudAngledRainZap from '../assets/icons/cloud_angled_rain_zap.png';

export const weatherIcons: IWeatherIcon = {
	[ Clouds.Clear ]: { dayIcon: sun, nightIcon: moonStars },
	[ Clouds.Few ]: { dayIcon: sunCloud, nightIcon: moonCloud },
	[ Clouds.Scattered ]: { dayIcon: sunCloud, nightIcon: moonCloud },
	[ Clouds.Broken ]: { dayIcon: cloud, nightIcon: cloud },
	[ Clouds.Overcast ]: { dayIcon: cloud, nightIcon: cloud },
	[ Atmosphere.Mist ]: { dayIcon: cloudSlowWind, nightIcon: cloudSlowWind },
	[ Atmosphere.Smoke ]: { dayIcon: cloudSlowWind, nightIcon: cloudSlowWind },
	[ Atmosphere.Haze ]: { dayIcon: cloudSlowWind, nightIcon: cloudSlowWind },
	[ Atmosphere.DustWhirls ]: { dayIcon: cloudFastWind, nightIcon: cloudFastWind },
	[ Atmosphere.Fog ]: { dayIcon: cloudFastWind, nightIcon: cloudFastWind },
	[ Atmosphere.Sand ]: { dayIcon: cloudFastWind, nightIcon: cloudFastWind },
	[ Atmosphere.Dust ]: { dayIcon: cloudFastWind, nightIcon: cloudFastWind },
	[ Atmosphere.VolcanicAsh ]: { dayIcon: cloudFastWind, nightIcon: cloudFastWind },
	[ Atmosphere.Squalls ]: { dayIcon: fastWinds, nightIcon: fastWinds },
	[ Atmosphere.Tornado ]: { dayIcon: tornado, nightIcon: tornado, },
	[ Snow.ShowerSleet ]: { dayIcon: sunCloudLittleSnow, nightIcon: moonCloudLittleSnow },
	[ Snow.LightShowerSleet ]: { dayIcon: sunCloudLittleSnow, nightIcon: moonCloudLittleSnow },
	[ Snow.LightRain ]: { dayIcon: sunCloudLittleSnow, nightIcon: moonCloudLittleSnow },
	[ Snow.Rain ]: { dayIcon: sunCloudLittleSnow, nightIcon: moonCloudLittleSnow },
	[ Snow.Light ]: { dayIcon: sunCloudSnow, nightIcon: moonCloudSnow },
	[ Snow.LightShowerSnow ]: { dayIcon: sunCloudSnow, nightIcon: moonCloudSnow },
	[ Snow.Medium ]: { dayIcon: sunCloudSnow, nightIcon: moonCloudSnow },
	[ Snow.Heavy ]: { dayIcon: cloudMidSnow, nightIcon: cloudMidSnow },
	[ Snow.HeavyShowerSnow ]: { dayIcon: cloudMidSnow, nightIcon: cloudMidSnow },
	[ Snow.ShowerSnow ]: { dayIcon: cloudMidSnow, nightIcon: cloudMidSnow },
	[ Rain.Freezing ]: { dayIcon: sunCloudHailstone, nightIcon: moonCloudHailstone },
	[ Drizzle.ShowerRain ]: { dayIcon: sunCloudHailstone, nightIcon: moonCloudHailstone },
	[ Drizzle.Shower ]: { dayIcon: sunCloudHailstone, nightIcon: moonCloudHailstone },
	[ Rain.Light ]: { dayIcon: sunCloudLittleRain, nightIcon: moonCloudLittleRain },
	[ Rain.LightShower ]: { dayIcon: sunCloudLittleRain, nightIcon: moonCloudLittleRain },
	[ Drizzle.LightDrizzle ]: { dayIcon: sunCloudLittleRain, nightIcon: moonCloudLittleRain },
	[ Drizzle.Drizzle ]: { dayIcon: sunCloudLittleRain, nightIcon: moonCloudLittleRain },
	[ Drizzle.LightDrizzleRain ]: { dayIcon: sunCloudLittleRain, nightIcon: moonCloudLittleRain },
	[ Rain.Medium ]: { dayIcon: sunCloudMidRain, nightIcon: moonCloudMidRain },
	[ Rain.Shower ]: { dayIcon: sunCloudMidRain, nightIcon: moonCloudMidRain },
	[ Drizzle.HeavyDrizzle ]: { dayIcon: sunCloudMidRain, nightIcon: moonCloudMidRain },
	[ Drizzle.DrizzleRain ]: { dayIcon: sunCloudMidRain, nightIcon: moonCloudMidRain },
	[ Drizzle.HeavyDrizzleRain ]: { dayIcon: sunCloudMidRain, nightIcon: moonCloudMidRain },
	[ Rain.Heavy ]: { dayIcon: sunCloudBigRain, nightIcon: moonCloudBigRain },
	[ Rain.HeavyShower ]: { dayIcon: sunCloudBigRain, nightIcon: moonCloudBigRain },
	[ Rain.Extreme ]: { dayIcon: sunCloudAngledRain, nightIcon: moonCloudMidRain },
	[ Rain.VeryHeavy ]: { dayIcon: sunCloudAngledRain, nightIcon: moonCloudMidRain },
	[ Rain.RaggedShower ]: { dayIcon: sunCloudAngledRain, nightIcon: moonCloudMidRain },
	[ Drizzle.HeavyShowerRain ]: { dayIcon: sunCloudAngledRain, nightIcon: moonCloudAngledRain },
	[ Thunderstorm.LightThunderstorm ]: { dayIcon: sunCloudZap, nightIcon: moonCloudZap },
	[ Thunderstorm.LightRain ]: { dayIcon: sunCloudZap, nightIcon: moonCloudZap },
	[ Thunderstorm.LightDrizzle ]: { dayIcon: sunCloudZap, nightIcon: moonCloudZap },
	[ Thunderstorm.Drizzle ]: { dayIcon: sunCloudZap, nightIcon: moonCloudZap },
	[ Thunderstorm.Thunderstorm ]: { dayIcon: cloudZap, nightIcon: cloudZap },
	[ Thunderstorm.HeavyThunderstorm ]: { dayIcon: cloud3zap, nightIcon: cloud3zap },
	[ Thunderstorm.RaggedThunderstorm ]: { dayIcon: zaps, nightIcon: zaps },
	[ Thunderstorm.HeavyRain ]: { dayIcon: cloudAngledRainZap, nightIcon: cloudAngledRainZap },
	[ Thunderstorm.Rain ]: { dayIcon: cloudAngledRainZap, nightIcon: cloudAngledRainZap },
	[ Thunderstorm.HeavyDrizzle ]: { dayIcon: cloudAngledRainZap, nightIcon: cloudAngledRainZap },
}