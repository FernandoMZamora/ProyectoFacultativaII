/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Container from './componentes/container';
import EventsView from './componentes/eventos';

AppRegistry.registerComponent(appName, () => EventsView);
