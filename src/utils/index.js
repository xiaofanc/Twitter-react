import VConsole from 'vconsole';
import { isMobile } from 'react-device-detect';

// eslint-disable-next-line import/prefer-default-export
export const startVconsole = () => isMobile && new VConsole();
