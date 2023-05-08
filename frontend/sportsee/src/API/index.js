import * as server from './RESTRequests'
import * as mock from './MockedRESTRequests'

const isMockActive = process.env.REACT_APP_MOCK_ACTIVE === "true";

export const API = isMockActive ? mock : server;

