import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

const middleWare = [thunk]
export const history = createBrowserHistory()
export default function configureStore(preloadedState?: any) {
    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    // // Hot reloading
    // if (module.loaded) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.accept('./reducers', () => {
    //         store.replaceReducer(rootReducer(history));
    //     });
    // }

    return createStore(
        rootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(...middleWare,
                routerMiddleware(history),
            ),
        ),
    )
}